import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { virtual_account_admin_alerts } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_admin_alerts";

export async function test_api_virtualAccount_adminAlerts_eraseById(
  connection: api.IConnection,
) {
  const output: virtual_account_admin_alerts =
    await api.functional.virtualAccount.adminAlerts.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
