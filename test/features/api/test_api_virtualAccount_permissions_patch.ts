import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountPermission } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountPermission";
import { IVirtualAccountPermission } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountPermission";

export async function test_api_virtualAccount_permissions_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountPermission =
    await api.functional.virtualAccount.permissions.patch(connection, {
      body: typia.random<IVirtualAccountPermission.IRequest>(),
    });
  typia.assert(output);
}
