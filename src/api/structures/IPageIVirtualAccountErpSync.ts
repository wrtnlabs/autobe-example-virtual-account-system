import { IPage } from "./IPage";
import { IVirtualAccountErpSync } from "./IVirtualAccountErpSync";

/**
 * ERP 연동 로그 목록 및 페이징 메타 정보 컨테이너.
 *
 * ERP/외부시스템 연동 내역 목록조회 등에서 사용하며, 데이터의 집합과 페이징 정보를 함께 제공합니다. Prisma DB의
 * virtual_account_erp_syncs 테이블과 연계됩니다. ERP 연동 이력, 관리자 대시보드의 리스트 및 엑셀 추출 등 다양한
 * 화면/업무 API 결과에 활용할 수 있습니다.
 *
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export type IPageIVirtualAccountErpSync = {
  /** 페이징 정보 객체. 현재 페이지, 페이지당 개수, 전체 레코드 수, 전체 페이지 수 등을 표시합니다. */
  pagination: IPage.IPagination;

  /** ERP 연동 로그 목록 데이터. */
  data: IVirtualAccountErpSync[];
};
