import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountVirtualAccount } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountVirtualAccount";

export async function test_api_virtualAccount_virtualAccounts_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountVirtualAccount =
    await api.functional.virtualAccount.virtualAccounts.post(connection, {
      body: typia.random<IVirtualAccountVirtualAccount.ICreate>(),
    });
  typia.assert(output);
}
