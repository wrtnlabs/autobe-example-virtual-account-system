import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { virtual_account_admin_alerts } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_admin_alerts";

export async function test_api_virtualAccount_adminAlerts_post(
  connection: api.IConnection,
) {
  const output: virtual_account_admin_alerts =
    await api.functional.virtualAccount.adminAlerts.post(connection, {
      body: typia.random<virtual_account_admin_alerts.ICreate>(),
    });
  typia.assert(output);
}
