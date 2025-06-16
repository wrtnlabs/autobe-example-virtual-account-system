import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { virtual_account_admin_alerts } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_admin_alerts";

export async function test_api_virtualAccount_adminAlerts_putById(
  connection: api.IConnection,
) {
  const output: virtual_account_admin_alerts =
    await api.functional.virtualAccount.adminAlerts.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<virtual_account_admin_alerts.IUpdate>(),
    });
  typia.assert(output);
}
