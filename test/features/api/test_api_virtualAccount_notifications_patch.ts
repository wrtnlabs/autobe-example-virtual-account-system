import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountNotification } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountNotification";
import { IVirtualAccountNotification } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotification";

export async function test_api_virtualAccount_notifications_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountNotification =
    await api.functional.virtualAccount.notifications.patch(connection, {
      body: typia.random<IVirtualAccountNotification.IRequest>(),
    });
  typia.assert(output);
}
