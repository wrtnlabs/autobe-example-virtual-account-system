import { tags } from "typia";

/**
 * 외부 시스템 정의 엔티티 단건
 *
 * ERP, 쇼핑몰, PG, 은행 등 연동 대상 시스템 정보의 마스터 테이블 DTO
 *
 * Prisma 테이블 virtual_account_external_systems와 1:1 매핑.
 *
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export type IVirtualAccountExternalSystems = {
  /** 외부 시스템 고유 UUID, virtual_account_external_systems.id */
  id: string & tags.Format<"uuid">;

  /**
   * 시스템 구분(ERP/MALL/BANK/PG)
   *
   * Virtual_account_external_systems.system_type
   */
  system_type: string;

  /**
   * 시스템 이름(예: Cafe24, 더존)
   *
   * Virtual_account_external_systems.name
   */
  name: string;

  /** API base URL, virtual_account_external_systems.api_base_url */
  api_base_url: string;

  /**
   * 활성화 여부(관리자 온/오프 시 사용)
   *
   * Virtual_account_external_systems.enabled
   */
  enabled: boolean;

  /**
   * 생성일시(감사로그/변경 기록)
   *
   * Virtual_account_external_systems.created_at
   */
  created_at: string & tags.Format<"date-time">;

  /**
   * 최종수정일
   *
   * Virtual_account_external_systems.updated_at
   */
  updated_at: string & tags.Format<"date-time">;
};
export namespace IVirtualAccountExternalSystems {
  /**
   * 외부 시스템 정의 등록용 데이터 DTO
   *
   * ERP, 쇼핑몰, PG, 은행 등 신규 연동 추가시 사용.
   */
  export type ICreate = {
    /**
     * 등록할 시스템 유형(ERP/MALL/BANK/PG)
     *
     * Virtual_account_external_systems.system_type 컬럼과 동일.
     */
    system_type: string;

    /**
     * 외부시스템 이름(예: Cafe24, 더존iCUBE)
     *
     * Virtual_account_external_systems.name
     */
    name: string;

    /**
     * Integration용 API base URL
     *
     * Virtual_account_external_systems.api_base_url
     */
    api_base_url: string;

    /** 활성화/비활성화(관리자용 플래그). */
    enabled: boolean;
  };

  /**
   * 외부 시스템 정의 수정용 DTO
   *
   * 이름, API, 활성화를 별도로 변경 가능하도록 구성.
   */
  export type IUpdate = {
    /**
     * 수정할 시스템 이름
     *
     * Virtual_account_external_systems.name
     */
    name?: string;

    /**
     * API base URL(수정)
     *
     * Virtual_account_external_systems.api_base_url
     */
    api_base_url?: string;

    /**
     * 활성화 여부(변경)
     *
     * Virtual_account_external_systems.enabled
     */
    enabled?: boolean;
  };

  /** 외부 시스템 삭제시 결과 DTO */
  export type IDeleteResult = {
    /** 삭제 성공 여부 */
    success?: boolean;

    /** 삭제 결과 메시지 또는 상세 */
    message?: string;
  };
}
