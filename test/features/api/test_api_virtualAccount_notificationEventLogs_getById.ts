import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountNotificationEventLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationEventLog";

export async function test_api_virtualAccount_notificationEventLogs_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotificationEventLog =
    await api.functional.virtualAccount.notificationEventLogs.getById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
      },
    );
  typia.assert(output);
}
