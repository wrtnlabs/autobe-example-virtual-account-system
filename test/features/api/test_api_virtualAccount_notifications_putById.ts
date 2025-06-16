import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountNotification } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotification";

export async function test_api_virtualAccount_notifications_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotification =
    await api.functional.virtualAccount.notifications.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountNotification.IUpdate>(),
    });
  typia.assert(output);
}
