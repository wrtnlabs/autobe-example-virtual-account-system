# 09. 가상계좌 API 및 화면/Security 상세 명세

## 1. 문서 개요 및 목적
본 문서는 가상계좌 기반 백엔드 중심 시스템 구축을 위한 API 명세, 사용자 주요 화면 정의, 그리고 역할별 권한·보안 정책을 개발자가 실무에 즉시 참고할 수 있도록 통합 정리합니다. 각 엔드포인트의 구조, 파라미터, 에러 반환 시나리오, 주요 UI 컴포넌트 예시, 역할별 제한 사항 및 인증 방식을 구체 예시와 함께 제공합니다.

## 2. API 명세 개요
- API 인증: OAuth2 Client Credentials 및 HMAC 서명 기반 (만료시간: 5분, 타임스탬프 포함)
- 전송 형식: JSON (UTF-8, application/json)
- 응답 구조 예:
```json
{
  "code": 200,
  "message": "처리 성공",
  "data": { ... }
}
```
- 오류 공통 구조 및 예시:
```json
{
  "code": 401,
  "message": "인증 실패: 토큰 만료"
}
```
- 주요 예외코드: 401(인증), 403(권한), 404(리소스없음), 409(중복/충돌), 422(유효성), 500(서버)

## 3. 주요 REST API 상세 명세
### [POST] /api/vaccount/issue
- 설명: 고객별 은행/PG 가상계좌 자동발급
- 인증: Bearer (OAuth2) + HMAC
- 파라미터 (Body):
  - `customer_id` (string, 필수)
  - `provider` (string, 필수: `KG`, `TOSS`)
  - `amount` (number, 선택: 즉시입금 설정시)
- 예시 요청
```json
{
  "customer_id": "CUS2024001",
  "provider": "KG",
  "amount": 120000
}
```
- 정상 응답
```json
{
  "code":200,
  "data":{
    "vaccount_no":"12345678901234",
    "bank_code":"004",
    "expire_at":"2025-12-31T23:59:59"
  }
}
```
- 에러 응답(중복 계좌)
```json
{
  "code":409,
  "message":"이미 발급된 계좌"
}
```
- 동시성 처리: 각 고객별 1개 활성 가상계좌 보장, 중복요청 방지(트랜잭션 레벨)

### [GET] /api/vaccount/deposits
- 설명: 조건별 입금 내역 조회(기간/처리상태/고객)
- 인증: Bearer + HMAC
- 파라미터 (Query):
  - `customer_id` (string, 선택)
  - `from_dt` (string, 필수: ISO8601)
  - `to_dt` (string, 필수)
  - `status` (string, 선택: `COMPLETE`, `FAIL`)
  - `page` (int, 기본:1)
  - `size` (int, 기본:20)
- 예시 요청: `/api/vaccount/deposits?customer_id=CUS2024001&from_dt=2025-01-01&to_dt=2025-01-31&status=COMPLETE&page=1&size=20`
- 정상 응답 구조
```json
{
  "code":200,
  "data":[{"deposit_id":1,"amount":120000,"status":"COMPLETE","deposited_at":"2025-01-11T13:45:22"}]
}
```
- 오류(권한없음)
```json
{"code":403, "message":"접근 권한 없음"}
```

### [POST] /api/vaccount/notify
- 설명: 입금/실패/만료/관리자알림 수동 트리거
- 인증: Bearer + HMAC
- 파라미터(Body):
  - `event_type` (string, 필수: `DEPOSIT_CONFIRMED`, `DEPOSIT_FAIL`, `EXPIRED`, `ADMIN_ALERT`)
  - `target_id` (string, 필수)

### [POST] /api/external/erp-sync
- 설명: 더존 iCUBE/외부 ERP 시스템 내역 연동
- 인증: Bearer
- 파라미터:
  - `erp_type` (string: `DUZON`, `CUSTOM`)
  - `data_type` (string: `deposit`, `account`)
  - `payload` (object)
- 예외(사전등록 안 된 ERP):
```json
{"code":404, "message":"ERP 미등록"}
```

## 4. 사용자 주요 화면 정의
### 4-1. 관리자 대시보드(메인)
- 주요 컴포넌트:
  - 검색바(고객명, 계좌번호, 기간)
  - 필터 버튼(입금상태, 은행/PG)
  - 목록 테이블(입금내역, 처리 상태, 매칭결과)
  - 엑셀 다운로드 버튼
  - 상세 열람 모달(입금내역, 고객/계좌 정보 Popup)
- 네비게이션 플로우: 
  1) 검색/필터 > 목록 테이블 갱신
  2) 행 선택 > 상세 모달 표시
  3) 메뉴: 외부 연동, 알림관리 섹션 진입

### 4-2. 입금 매칭/처리 화면
- 입금내역별 개별/일괄처리 체크박스, 처리상태/실패사유 입력, 처리 결과 실시간 반영
- 실패건 재처리 Action 버튼, 처리이력 목록

### 4-3. 알림 및 설정 관리
- 알림 내역(리스트/검색/삭제), 알림 조건 설정(토글), 알림 채널 관리(카카오/이메일) UI 컴포넌트

### 4-4. 권한 관리 및 로그
- 역할별 권한 부여 드랍다운, 권한 변경이력(테이블: 변경자, 변경일, 변경내용), 수동/자동 2차 인증 트리거

- 전반적 UI흐름:
  - 좌측 내비게이션(대시보드, 입금내역, 알림, 연동, 보안), 각 화면별 상태/결과 Modal 또는 아래고정 Toast

## 5. 권한 및 보안 정책
### 5-1. 역할/권한별 접근 제한 및 예시
- 고객: 본인 정보 및 입금내역만 조회, 관리자 페이지 접근시 403 반환
- 관리자: 전체 대시보드, 입금/알림/권한 화면 접근, 권한변경 가능
- 슈퍼관리자(선택): 시스템 설정/ERP 연동 관리 UI 노출
- 예시 오류: 고객이 `/api/vaccount/deposits/all`(전체조회) 접근 시
```json
{"code":403,"message":"권한 없음 - 관리자만 접근 가능"}
```

### 5-2. 권한 변경 이력 관리 정책
- 테이블 항목: 변경ID, 변경자ID/이름, 대상, 변경권한/상태, 변경일시

### 5-3. API 인증 방식 구체화(HMAC/OAuth2)
- HMAC 방식: timestamp+client_id 기반 서명, 요청 body 및 path 포함 암호화
- 예시: `HMAC-SHA256(BASE64(timestamp+client_id+body))` 헤더 포함, 유효기간 5분 설정
- 만료시 예시:
```json
{"code":401, "message":"HMAC 서명 만료, 재인증 필요"}
```
- 모든 중요 요청(발급/알림/입금처리/외부연동)에 이중 인증 적용

## 6. 기타 정책 및 확장
- 외부 연동 추가 시, 사전등록 및 스키마 정의 테이블 제공 필요
- 화면/UI/권한 정책 변경 시 관리 로그 자동저장

---

참고: 전체 시스템 구조, API 흐름도/ERD 등 타 문서([00_virtual_account_toc.md] 등)에서 연계하여 별도 확인 가능.
