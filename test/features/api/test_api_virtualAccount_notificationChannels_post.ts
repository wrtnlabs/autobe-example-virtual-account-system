import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountNotificationChannel } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationChannel";

export async function test_api_virtualAccount_notificationChannels_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotificationChannel =
    await api.functional.virtualAccount.notificationChannels.post(connection, {
      body: typia.random<IVirtualAccountNotificationChannel.ICreate>(),
    });
  typia.assert(output);
}
