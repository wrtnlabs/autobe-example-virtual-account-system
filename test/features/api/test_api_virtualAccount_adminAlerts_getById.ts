import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountAdminAlerts } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAdminAlerts";

export async function test_api_virtualAccount_adminAlerts_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountAdminAlerts =
    await api.functional.virtualAccount.adminAlerts.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
