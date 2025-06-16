import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountVirtualAccount } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountVirtualAccount";
import { IVirtualAccountVirtualAccount } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountVirtualAccount";

export async function test_api_virtualAccount_virtualAccounts_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountVirtualAccount =
    await api.functional.virtualAccount.virtualAccounts.patch(connection, {
      body: typia.random<IVirtualAccountVirtualAccount.IRequest>(),
    });
  typia.assert(output);
}
