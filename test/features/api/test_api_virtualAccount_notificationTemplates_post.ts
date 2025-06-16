import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountNotificationTemplate } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationTemplate";

export async function test_api_virtualAccount_notificationTemplates_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotificationTemplate =
    await api.functional.virtualAccount.notificationTemplates.post(connection, {
      body: typia.random<IVirtualAccountNotificationTemplate.ICreate>(),
    });
  typia.assert(output);
}
