import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { virtual_account_admin_activity_logs } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_admin_activity_logs";

export async function test_api_virtualAccount_adminActivityLogs_putById(
  connection: api.IConnection,
) {
  const output: virtual_account_admin_activity_logs =
    await api.functional.virtualAccount.adminActivityLogs.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<virtual_account_admin_activity_logs.IUpdate>(),
    });
  typia.assert(output);
}
