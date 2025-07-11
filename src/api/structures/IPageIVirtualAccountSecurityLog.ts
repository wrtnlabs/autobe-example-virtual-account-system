import { IPage } from "./IPage";
import { IVirtualAccountSecurityLog } from "./IVirtualAccountSecurityLog";

/**
 * 가상계좌 시스템의 보안 로그 페이징 결과입니다.
 *
 * 이 타입은 DB의 virtual_account_security_logs 테이블 전체를 요청 조건에 따라 검색해서, 페이징할때 사용하는 래퍼
 * 타입입니다. 각 보안 로그의 상세는 data 배열로, 페이지네이션 정보는 pagination 객체로 제공합니다.
 *
 * 실제 보안/감사 조회, 엑셀 다운로드, 대시보드 표시 등에 사용됩니다.
 *
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export type IPageIVirtualAccountSecurityLog = {
  pagination: IPage.IPagination;
  data: IVirtualAccountSecurityLog[];
};
