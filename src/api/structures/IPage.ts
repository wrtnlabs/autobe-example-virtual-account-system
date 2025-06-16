import { tags } from "typia";

export namespace IPage {
  /** 표준 페이지네이션 정보 오브젝트 타입. 대량 데이터의 리스트/검색 화면 등에서 공용 사용. */
  export type IPagination = {
    /** 현재 페이지 번호. */
    current?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "uint32";
      }>;

    /** 페이지 당 최대 수(표준 100). */
    limit?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "uint32";
      }>;

    /** 전체 데이터 기준 총 레코드 수. */
    records?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "uint32";
      }>;

    /** 전체 페이지 수(총 레코드수/limit 올림). */
    pages?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "uint32";
      }>;
  };
}
