import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountRolePermission } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountRolePermission";

export async function test_api_virtualAccount_rolePermissions_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountRolePermission =
    await api.functional.virtualAccount.rolePermissions.post(connection, {
      body: typia.random<IVirtualAccountRolePermission.ICreate>(),
    });
  typia.assert(output);
}
