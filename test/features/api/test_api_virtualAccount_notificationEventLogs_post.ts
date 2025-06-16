import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountNotificationEventLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationEventLog";

export async function test_api_virtualAccount_notificationEventLogs_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotificationEventLog =
    await api.functional.virtualAccount.notificationEventLogs.post(connection, {
      body: typia.random<IVirtualAccountNotificationEventLog.ICreate>(),
    });
  typia.assert(output);
}
