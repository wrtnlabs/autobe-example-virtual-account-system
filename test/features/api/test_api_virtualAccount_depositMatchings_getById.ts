import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountDepositMatchings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDepositMatchings";

export async function test_api_virtualAccount_depositMatchings_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDepositMatchings =
    await api.functional.virtualAccount.depositMatchings.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
