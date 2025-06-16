import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountPermission } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountPermission";

export async function test_api_virtualAccount_permissions_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountPermission =
    await api.functional.virtualAccount.permissions.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountPermission.IUpdate>(),
    });
  typia.assert(output);
}
