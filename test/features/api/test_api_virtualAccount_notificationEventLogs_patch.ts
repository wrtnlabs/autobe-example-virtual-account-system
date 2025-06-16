import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountNotificationEventLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountNotificationEventLog";
import { IVirtualAccountNotificationEventLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationEventLog";

export async function test_api_virtualAccount_notificationEventLogs_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountNotificationEventLog =
    await api.functional.virtualAccount.notificationEventLogs.patch(
      connection,
      {
        body: typia.random<IVirtualAccountNotificationEventLog.IRequest>(),
      },
    );
  typia.assert(output);
}
