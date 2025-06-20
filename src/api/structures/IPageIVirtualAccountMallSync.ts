import { IPage } from "./IPage";
import { IVirtualAccountMallSync } from "./IVirtualAccountMallSync";

/**
 * 몰 연동 로그 검색 결과와 페이징 메타 데이터.
 *
 * 관리자 대시보드의 연동 결과 리스트, 엑셀 저장 등 페이징 데이터 포함 응답에 사용합니다.
 *
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export type IPageIVirtualAccountMallSync = {
  /** 페이징 정보 */
  pagination: IPage.IPagination;

  /** 몰 연동 로그 데이터 배열 */
  data: IVirtualAccountMallSync[];
};
