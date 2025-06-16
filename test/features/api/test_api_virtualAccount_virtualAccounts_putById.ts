import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountVirtualAccount } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountVirtualAccount";

export async function test_api_virtualAccount_virtualAccounts_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountVirtualAccount =
    await api.functional.virtualAccount.virtualAccounts.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountVirtualAccount.IUpdate>(),
    });
  typia.assert(output);
}
