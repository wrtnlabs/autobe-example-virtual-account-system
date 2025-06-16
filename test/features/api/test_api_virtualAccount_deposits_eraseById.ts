import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountDeposits } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDeposits";

export async function test_api_virtualAccount_deposits_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDeposits.IDeleteResult =
    await api.functional.virtualAccount.deposits.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
