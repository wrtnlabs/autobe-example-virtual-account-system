import { IPage } from "./IPage";
import { IVirtualAccountSuperAdmin } from "./IVirtualAccountSuperAdmin";

/**
 * 슈퍼관리자 리스트(페이징). data: 계정 배열, pagination: 페이징 메타.
 *
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export type IPageIVirtualAccountSuperAdmin = {
  pagination: IPage.IPagination;
  data: IVirtualAccountSuperAdmin[];
};
