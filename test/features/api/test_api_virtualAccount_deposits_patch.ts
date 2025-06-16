import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountDeposits } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountDeposits";
import { IVirtualAccountDeposits } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDeposits";

export async function test_api_virtualAccount_deposits_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountDeposits =
    await api.functional.virtualAccount.deposits.patch(connection, {
      body: typia.random<IVirtualAccountDeposits.IRequest>(),
    });
  typia.assert(output);
}
