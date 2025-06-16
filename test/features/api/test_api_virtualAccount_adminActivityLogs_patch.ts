import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPagevirtual_account_admin_activity_logs } from "@ORGANIZATION/PROJECT-api/lib/structures/IPagevirtual_account_admin_activity_logs";
import { virtual_account_admin_activity_logs } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_admin_activity_logs";

export async function test_api_virtualAccount_adminActivityLogs_patch(
  connection: api.IConnection,
) {
  const output: IPagevirtual_account_admin_activity_logs =
    await api.functional.virtualAccount.adminActivityLogs.patch(connection, {
      body: typia.random<virtual_account_admin_activity_logs.IRequest>(),
    });
  typia.assert(output);
}
