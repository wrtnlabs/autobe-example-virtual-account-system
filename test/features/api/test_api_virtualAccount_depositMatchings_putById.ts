import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountDepositMatchings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDepositMatchings";

export async function test_api_virtualAccount_depositMatchings_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDepositMatchings =
    await api.functional.virtualAccount.depositMatchings.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountDepositMatchings.IUpdate>(),
    });
  typia.assert(output);
}
