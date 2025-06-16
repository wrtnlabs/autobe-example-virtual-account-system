export namespace IVirtualAccountExternalSystem {
  /**
   * 외부 시스템 정의(ERP, 쇼핑몰, PG, 은행 등) 검색조건 및 페이징 쿼리
   *
   * 대시보드/관리자 UX의 연동 설정 조회 검색 등에 사용.
   */
  export type IRequest = {
    /**
     * 외부시스템 구분값(ERP, MALL, BANK, PG 중 하나)
     *
     * Virtual_account_external_systems.system_type 컬럼.
     *
     * 검색, 필터, 신규연동 추가 시 사용.
     */
    system_type?: string;

    /**
     * 시스템 이름(예: Cafe24, 더존iCUBE 등). 부분검색 가능.
     *
     * Virtual_account_external_systems.name
     */
    name?: string;

    /**
     * 사용/연동 허용 상태 필터.
     *
     * Virtual_account_external_systems.enabled
     */
    enabled?: boolean;
  };
}
