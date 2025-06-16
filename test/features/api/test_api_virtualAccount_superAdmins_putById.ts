import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountSuperAdmin } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountSuperAdmin";

export async function test_api_virtualAccount_superAdmins_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountSuperAdmin =
    await api.functional.virtualAccount.superAdmins.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountSuperAdmin.IUpdate>(),
    });
  typia.assert(output);
}
