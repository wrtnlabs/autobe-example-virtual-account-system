import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountNotificationTemplate } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountNotificationTemplate";
import { IVirtualAccountNotificationTemplate } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationTemplate";

export async function test_api_virtualAccount_notificationTemplates_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountNotificationTemplate =
    await api.functional.virtualAccount.notificationTemplates.patch(
      connection,
      {
        body: typia.random<IVirtualAccountNotificationTemplate.IRequest>(),
      },
    );
  typia.assert(output);
}
