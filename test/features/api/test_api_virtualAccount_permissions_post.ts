import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountPermission } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountPermission";

export async function test_api_virtualAccount_permissions_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountPermission =
    await api.functional.virtualAccount.permissions.post(connection, {
      body: typia.random<IVirtualAccountPermission.ICreate>(),
    });
  typia.assert(output);
}
