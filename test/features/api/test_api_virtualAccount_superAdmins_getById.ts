import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountSuperAdmin } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountSuperAdmin";

export async function test_api_virtualAccount_superAdmins_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountSuperAdmin =
    await api.functional.virtualAccount.superAdmins.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
