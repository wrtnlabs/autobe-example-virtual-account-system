import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountRolePermission } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountRolePermission";

export async function test_api_virtualAccount_rolePermissions_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountRolePermission =
    await api.functional.virtualAccount.rolePermissions.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
