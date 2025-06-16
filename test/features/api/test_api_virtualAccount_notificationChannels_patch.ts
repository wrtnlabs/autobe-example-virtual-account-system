import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountNotificationChannel } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountNotificationChannel";
import { IVirtualAccountNotificationChannel } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationChannel";

export async function test_api_virtualAccount_notificationChannels_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountNotificationChannel =
    await api.functional.virtualAccount.notificationChannels.patch(connection, {
      body: typia.random<IVirtualAccountNotificationChannel.IRequest>(),
    });
  typia.assert(output);
}
