import { tags } from "typia";

export namespace IVirtualAccountMaterializedStats {
  /**
   * 대시보드/리포트용 집계 지표(virtual_account_materialized_stats) 리스트 조회 조건을 기술하는 요청 바디
   * 타입입니다.
   *
   * 주요 검색조건(지표키, 기간범위, 페이지네이션, 정렬정보 등)을 자유롭게 조합 가능하게 정의했으며, 각 필드는 옵션입니다.
   *
   * 통계 수집 및 대시보드 통합 쿼리, ETL 집계 후 리포트용으로 사용됩니다.
   */
  export type IRequest = {
    /**
     * 필터 조건 사용시, 특정 대시보드/리포트 지표의 구분자 키(예:'active_accounts',
     * 'fail_deposit_count' 등).
     */
    stat_key?: string;

    /** 조회 시작 기준(포함)의 스냅샷 시점. ISO8601, UTC. */
    as_of_from?: string & tags.Format<"date-time">;

    /** 조회 종료 기준(포함)의 스냅샷 시점. ISO8601, UTC. */
    as_of_to?: string & tags.Format<"date-time">;

    /** 페이지 번호. 1부터 시작. */
    page?: number & tags.Type<"int32">;

    /** 페이지 당 개수. */
    limit?: number & tags.Type<"int32">;

    /** 정렬 기준. ex: 'as_of desc', 'stat_key asc' 등. */
    sort?: string;
  };
}
