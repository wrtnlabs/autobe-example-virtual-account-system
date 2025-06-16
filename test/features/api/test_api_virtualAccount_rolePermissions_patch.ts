import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountRolePermission } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountRolePermission";
import { IVirtualAccountRolePermission } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountRolePermission";

export async function test_api_virtualAccount_rolePermissions_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountRolePermission =
    await api.functional.virtualAccount.rolePermissions.patch(connection, {
      body: typia.random<IVirtualAccountRolePermission.IRequest>(),
    });
  typia.assert(output);
}
