# 가상계좌 시스템 문서 목차 (TOC)

본 문서는 신규 백엔드 중심의 웹 시스템 구축을 위한 가상계좌 관리 프로젝트의 전체 구조와 문서별 역할을 안내합니다. 차기 개발 및 협업, 이해관계자 피드백 수집 시 본 문서를 참조하여 전체 로드맵과 세부 구현 가이드의 맥락을 빠르게 파악할 수 있습니다.

## 주요 도입 배경
- 은행/PG 연동을 통한 가상계좌 발급
- 실시간 입금내역 매칭 및 자동화
- 입금/처리 결과 알림의 신속성
- 외부 시스템(ERP/쇼핑몰)과 연계성 강화
- 관리자 대시보드 및 보안/인증 고도화

---

## 목차 및 각 문서 설명

1. **[01_virtual_account_overview.md](./01_virtual_account_overview.md)**
    - 프로젝트 및 시스템 개요, 구축 목표, 성공 KPI, 도입 배경 등

2. **[02_virtual_account_user_and_usecase.md](./02_virtual_account_user_and_usecase.md)**
    - 주요 사용자(고객, 관리자, 슈퍼관리자), 역할, 핵심 사용 시나리오, 유저 여정

3. **[03_virtual_account_issue_flow.md](./03_virtual_account_issue_flow.md)**
    - 가상계좌 발급부터 입금처리/매칭, 알림까지의 상세 프로세스(플로우 차트)

4. **[04_virtual_account_external_integration.md](./04_virtual_account_external_integration.md)**
    - 은행/PG(이니시스, 토스페이먼츠), ERP(더존iCUBE), 쇼핑몰(카페24, 고도몰) 연동 설계, 인증방식(OAuth2/HMAC)

5. **[05_virtual_account_notification.md](./05_virtual_account_notification.md)**
    - 카카오톡, 이메일 등의 입금, 실패, 만료, 관리자 알림 조건별 로직 및 UX

6. **[06_virtual_account_admin_dashboard.md](./06_virtual_account_admin_dashboard.md)**
    - 관리자 기능: 계좌조회, 필터/검색, 엑셀 다운로드, 알림 관리 등 화면/기능 명세

7. **[07_virtual_account_security.md](./07_virtual_account_security.md)**
    - 보안정책, 역할별 권한 정의, 2차 인증, 로그인/접근 통제 기준

8. **[08_virtual_account_infrastructure.md](./08_virtual_account_infrastructure.md)**
    - 인프라 구조(AWS EC2/RDS, CI/CD, 모니터링), 시스템 신뢰성·확장성·백업 방안

9. **[09_virtual_account_api_and_screen_spec.md](./09_virtual_account_api_and_screen_spec.md)**
    - 주요 업무 API 및 화면 입출력 명세, 외부 연동 포맷 등 기획 관점의 종합 명세

---

## 이용 및 참고 안내
- 문서들은 협의 이력과 주기적 피드백을 반영해 지속 업데이트 됩니다.
- 각 파일 링크를 통해 세부 항목을 바로 확인하십시오.
- 통합 문서, 연동 문서 필요시 개별 확장 가능합니다.
