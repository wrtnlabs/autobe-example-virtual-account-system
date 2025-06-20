import { IPage } from "./IPage";
import { IVirtualAccountNotificationTemplate } from "./IVirtualAccountNotificationTemplate";

/**
 * 알림 템플릿 리스트/페이지네이션 응답 컨테이너.
 *
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export type IPageIVirtualAccountNotificationTemplate = {
  pagination: IPage.IPagination;
  data: IVirtualAccountNotificationTemplate[];
};
