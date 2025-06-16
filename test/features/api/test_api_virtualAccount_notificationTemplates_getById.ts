import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountNotificationTemplate } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountNotificationTemplate";

export async function test_api_virtualAccount_notificationTemplates_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountNotificationTemplate =
    await api.functional.virtualAccount.notificationTemplates.getById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
      },
    );
  typia.assert(output);
}
