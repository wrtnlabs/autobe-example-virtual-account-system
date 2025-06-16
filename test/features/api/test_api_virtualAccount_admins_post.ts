import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountAdmin } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAdmin";

export async function test_api_virtualAccount_admins_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountAdmin =
    await api.functional.virtualAccount.admins.post(connection, {
      body: typia.random<IVirtualAccountAdmin.ICreate>(),
    });
  typia.assert(output);
}
