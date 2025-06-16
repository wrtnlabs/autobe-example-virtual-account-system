import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountSuperAdmin } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountSuperAdmin";

export async function test_api_virtualAccount_superAdmins_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountSuperAdmin =
    await api.functional.virtualAccount.superAdmins.post(connection, {
      body: typia.random<IVirtualAccountSuperAdmin.ICreate>(),
    });
  typia.assert(output);
}
