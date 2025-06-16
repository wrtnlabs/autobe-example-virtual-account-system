import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountNotificationTemplate } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationTemplate";

export async function test_api_virtualAccount_notificationTemplates_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotificationTemplate =
    await api.functional.virtualAccount.notificationTemplates.putById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
        body: typia.random<IVirtualAccountNotificationTemplate.IUpdate>(),
      },
    );
  typia.assert(output);
}
