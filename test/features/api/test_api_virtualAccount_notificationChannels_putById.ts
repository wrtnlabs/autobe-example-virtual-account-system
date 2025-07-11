import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountNotificationChannel } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationChannel";

export async function test_api_virtualAccount_notificationChannels_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotificationChannel =
    await api.functional.virtualAccount.notificationChannels.putById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
        body: typia.random<IVirtualAccountNotificationChannel.IUpdate>(),
      },
    );
  typia.assert(output);
}
