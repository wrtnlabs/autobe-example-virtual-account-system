# 08. 가상계좌 시스템 인프라 설계 및 운영

## 목차
- [서비스 아키텍처 개요](#서비스-아키텍처-개요)
- [서버 및 DB 운영 환경](#서버-및-db-운영-환경)
- [CI/CD 및 배포 자동화](#cicd-및-배포-자동화)
- [로깅, 모니터링, 장애 대응](#로깅-모니터링-장애-대응)
- [DR(재해복구) 및 백업](#dr재해복구-및-백업)
- [테스트 환경 및 분리 전략](#테스트-환경-및-분리-전략)
- [마이그레이션 및 확장 전략](#마이그레이션-및-확장-전략)
- [보안 및 권한관리 설계](#보안-및-권한관리-설계)
- [가상계좌 알림/연동 설계](#가상계좌-알림연동-설계)
- [관리자 대시보드/운영 관리](#관리자-대시보드운영-관리)
- [API & 화면 명세와 인프라 연계](#api--화면-명세와-인프라-연계)

---

## 서비스 아키텍처 개요
AWS 기반 3-tier 구조로, EC2는 여러 가용영역(AZ)에 분산된 오토스케일링 그룹으로 구성, RDS(MySQL)도 Multi-AZ 옵션으로 실시간 장애 대비. Redis는 캐싱 및 세션 공유용 Elasticache로 활용. S3는 로그/정산파일 저장소로, CloudFront 연계가 가능.

예시 워크플로우로 RESTful API 서버 요청이 ALB를 통해 EC2로 라우팅되고, 입금내역은 외부 은행/PG(예: KG이니시스, Toss Payments)와 연동된다. ERP(더존 iCUBE 등) 및 쇼핑몰(Cafe24, 고도몰)과의 연계는 API Gateway, Webhook 등으로 분리.

AWS IAM Role 기반 접근 제어, 자동화된 보안 패치, 게스트/운영 네트워크 분리는 기본 적용.

## 서버 및 DB 운영 환경
표준 서버 운영환경은 Amazon Linux 2, 컨테이너화(ECS/ECR) 및 Aurora(MySQL 호환형) RDS 활용을 기본 가정. 운영 정책은 SLA 99.9% 준수, 운영 및 DR 식별/관리 방법, 정기 점검/패치 기준 등 실제 사례와 함께 제시.

예 : 장애 시 RDS 자동 장애 조치, Aurora 글로벌 데이터베이스로 이중화, 미션크리티컬 시스템을 위한 주기적 스냅샷/DB 복구 테스트 실시.

## CI/CD 및 배포 자동화
AWS CodePipeline, CodeBuild, CodeDeploy 기반 CI/CD 파이프라인 설계. Pull Request 병합 → 단위테스트/정적분석 → UAT 환경 자동배포 순으로 진행. 운영 배포 시 블루/그린 배포 적용, 롤백 및 장애 시 수동 롤백 워크플로우 정의.

운영 실무: 잘못된 배포 발생 시 즉시 이전 버전으로 복구하는 핫스왑 절차, 신규 기능 UAT 통합 자동화 등 사례 추가.

## 로깅, 모니터링, 장애 대응
CloudWatch 및 ELK(ElasticSearch/Kibana) 로그 집계, 각 이벤트 발생 시 Lambda 연동 통한 관리자/개발자 알림(Slack/Email/문자). 장애탐지 시 PagerDuty, SMS 등 자동 알림 워크플로우 제공. 예: DB 연결장애 감지 시 1~2분 내 별도 서버로 트래픽 자동 우회, 알림 및 장애이력 저장.

운영 사례: 일반장애(네트워크, 서버)시 즉각 메트릭 기반 알림 발송 및 사후 대시보드 자동 리포트 생성 절차.

## DR(재해복구) 및 백업
A/B 리전 이중화 및 정기 스냅샷(일/주간), WAL 기반 자동 DB 복구체계. S3 cross-region 복제 통한 데이터 보존, DR 상황(리전이 전체 장애일 경우) 즉시 수동 전환 매뉴얼, 중요 데이터(계좌 정보 등)는 별도 암호화하여 백업 보관. DR 훈련 주기(월 1회) 및 결과 기록.

## 테스트 환경 및 분리 전략
개발/QA/UAT/운영 4계층 환경 분리 적용, 각 환경별 별도 VPC 및 인프라 리소스 운영. 외부 연동(은행/PG, ERP, 쇼핑몰)은 샌드박스/테스트키로 차등 분리하여 실제 입금 오입력/연동 사고 최소화. 테스트 배포 자동화, 데이터 마스킹, 운영로그/개인정보 별도 분리 저장.

예시: 모의 입금 Webhook 테스트/실패 시 실제 운영환경에 영향 없음. 시나리오 빌드 자동화 적용.

## 마이그레이션 및 확장 전략
라이브 전환 전 상태 이행 작업(기존 계좌 데이터 이전, ERP/쇼핑몰 연동 데이터 검증, 커스텀 스크립트 활용), 무중단 배포 방안(롤링업데이트), DB 샤딩 또는 리전 확장 방법 예시.

운영 사례: 대규모 쇼핑몰 판매 이벤트 발생 시 자동 확장(EC2 Scale-out), 성능 저하 시 캐시 볼트 대체 운영 등 적용.

## 보안 및 권한관리 설계
[07_virtual_account_security.md](07_virtual_account_security.md) 문서와 연계.

역할기반 접근제어(RBAC)를 적용하여 슈퍼관리자-관리자-일반사용자 별 권한 최소화, 주요 이벤트(로그인 2차 인증, 패스워드 로테이션, IP 허용리스트) 적용.

운영 사례: 운영관리자 신규 등록/권한변경 시 OTP/Email 인증 필수, 이상 로그인/탈취 시도 발생 시 자동 계정 잠금과 알림 연동.

## 가상계좌 알림/연동 설계
[05_virtual_account_notification.md](05_virtual_account_notification.md) 참조.

입금, 입금 실패, 계좌만료 등의 이벤트 발생 시 카카오톡/이메일/관리자 알림을 연동하여 실시간 통보. 외부 시스템(ERP, 쇼핑몰)은 이벤트 Webhook 또는 REST API로 동기/비동기 처리 지원.

실제 오작동 사례에서는, ALR트리거 및 장애 내역 CC에 실시간 통계 제공하며 반복 실패 시 운영/개발자에게 escalated 알림 전달.

## 관리자 대시보드/운영 관리
[06_virtual_account_admin_dashboard.md](06_virtual_account_admin_dashboard.md) 참조.

운영팀이 실시간 상태 모니터링(계좌발급 내역, 입금 내역, 알림 로그, 엑셀 다운로드 등) 및 필터링, 권한별 중요 정보 비공개 등 효율적 운영 가능. 주요 설정(알림 주기, 관리자 승인, 로그 열람 등)은 관리자 Dashboard에서 관리.

장애 발생 시 관리자에게 즉시 안내, 처리 결과 히스토리화. 실제 사례: 입금 내역 오류 탐지 시 자동 리포팅 → 운영자 승인 후 외부 시스템 반영까지 프로세스 자동화 지원.

## API & 화면 명세와 인프라 연계
[09_virtual_account_api_and_screen_spec.md](09_virtual_account_api_and_screen_spec.md) 문서와 연계.

- API 엔드포인트 및 각 화면(계좌 발급, 입금 확인, 매칭, 알림 관리 등)이 실제 인프라 구조와 어떤 연동을 갖는지 설명합니다.
- API 인증(OAuth2/HMAC) 및 권한체계, API GateWay Throughput 모니터링, 각 화면별 운영환경 차등 구성 실무 방안을 다룹니다.
- 예시: 신규 가상계좌 신청 API 트랜잭션이 AWS 로드밸런서 → API Gateway → 인증 체크 → 오토스케일링 그룹 → RDS → 결함 시 알림 트리거까지 연동되는 구조.

---


본 문서는 다른 세부 문서들과 내부 하이퍼링크 및 실제 운영 사례 중심으로 인프라 운영을 상세 기술하였습니다. 추가 협의 및 개선사항은 항상 환영합니다.