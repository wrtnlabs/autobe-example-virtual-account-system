import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountSuperAdmin } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountSuperAdmin";
import { IVirtualAccountSuperAdmin } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountSuperAdmin";

export async function test_api_virtualAccount_superAdmins_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountSuperAdmin =
    await api.functional.virtualAccount.superAdmins.patch(connection, {
      body: typia.random<IVirtualAccountSuperAdmin.IRequest>(),
    });
  typia.assert(output);
}
