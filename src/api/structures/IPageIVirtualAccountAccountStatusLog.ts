import { IPage } from "./IPage";
import { IVirtualAccountAccountStatusLog } from "./IVirtualAccountAccountStatusLog";

/**
 * 가상계좌 상태로그 페이징/검색 응답형 DTO.
 *
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export type IPageIVirtualAccountAccountStatusLog = {
  pagination: IPage.IPagination;
  data: IVirtualAccountAccountStatusLog[];
};
