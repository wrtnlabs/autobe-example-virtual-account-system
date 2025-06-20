/**
 * 알림 채널 신규 등록 요청 스키마
 *
 * Virtual_account_notification_channels 테이블 신규 생성에서 사용되며,
 *
 * 업무/관리 요구조건, 연동설정값 등 시스템 보안/프라이버시 규정을 엄격히 따릅니다.
 *
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export type virtual_account_IVirtualAccountNotificationChannel_ICreate = {
  /**
   * 신규 생성할 알림 채널의 타입(카카오, email, sms 등).
   *
   * 시스템별로 중복 없이 생성됨.
   */
  channel_type: string;

  /**
   * 채널의 관리자 화면 표기명.
   *
   * UX용, 구별 및 검색 필드.
   */
  display_name: string;

  /**
   * 채널의 활성화 여부.
   *
   * Init 또는 활성 채널로 등록 여부.
   */
  is_active: boolean;

  /**
   * API 연동설정값 등 JSON 직렬화 문자열.
   *
   * 연동정보, 송신/수신자 정보 등 동적으로 입력됨.
   */
  settings_json: string;
};
