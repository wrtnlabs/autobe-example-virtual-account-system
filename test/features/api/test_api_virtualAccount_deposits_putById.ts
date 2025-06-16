import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountDeposits } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDeposits";

export async function test_api_virtualAccount_deposits_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDeposits =
    await api.functional.virtualAccount.deposits.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountDeposits.IUpdate>(),
    });
  typia.assert(output);
}
