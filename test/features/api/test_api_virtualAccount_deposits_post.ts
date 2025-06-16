import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountDeposits } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDeposits";

export async function test_api_virtualAccount_deposits_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDeposits =
    await api.functional.virtualAccount.deposits.post(connection, {
      body: typia.random<IVirtualAccountDeposits.ICreate>(),
    });
  typia.assert(output);
}
