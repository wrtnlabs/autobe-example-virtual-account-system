import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountDepositMatchings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDepositMatchings";

export async function test_api_virtualAccount_depositMatchings_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDepositMatchings.IDeleteResult =
    await api.functional.virtualAccount.depositMatchings.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
