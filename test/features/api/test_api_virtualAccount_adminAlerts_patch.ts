import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountAdminAlerts } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountAdminAlerts";
import { IVirtualAccountAdminAlerts } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAdminAlerts";

export async function test_api_virtualAccount_adminAlerts_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountAdminAlerts =
    await api.functional.virtualAccount.adminAlerts.patch(connection, {
      body: typia.random<IVirtualAccountAdminAlerts.IRequest>(),
    });
  typia.assert(output);
}
