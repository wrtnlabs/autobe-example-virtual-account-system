import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountDepositMatchings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDepositMatchings";

export async function test_api_virtualAccount_depositMatchings_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDepositMatchings =
    await api.functional.virtualAccount.depositMatchings.post(connection, {
      body: typia.random<IVirtualAccountDepositMatchings.ICreate>(),
    });
  typia.assert(output);
}
