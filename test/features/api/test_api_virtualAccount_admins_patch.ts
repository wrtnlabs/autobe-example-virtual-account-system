import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountAdmin } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountAdmin";
import { IVirtualAccountAdmin } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAdmin";

export async function test_api_virtualAccount_admins_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountAdmin =
    await api.functional.virtualAccount.admins.patch(connection, {
      body: typia.random<IVirtualAccountAdmin.IRequest>(),
    });
  typia.assert(output);
}
