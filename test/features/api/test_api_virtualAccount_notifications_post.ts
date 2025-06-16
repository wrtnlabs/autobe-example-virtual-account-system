import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountNotification } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotification";

export async function test_api_virtualAccount_notifications_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotification =
    await api.functional.virtualAccount.notifications.post(connection, {
      body: typia.random<IVirtualAccountNotification.ICreate>(),
    });
  typia.assert(output);
}
