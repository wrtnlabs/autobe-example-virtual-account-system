import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountNotificationEventLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationEventLog";

export async function test_api_virtualAccount_notificationEventLogs_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotificationEventLog =
    await api.functional.virtualAccount.notificationEventLogs.putById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
        body: typia.random<IVirtualAccountNotificationEventLog.IUpdate>(),
      },
    );
  typia.assert(output);
}
