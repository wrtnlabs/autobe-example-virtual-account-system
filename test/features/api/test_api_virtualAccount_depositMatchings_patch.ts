import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountDepositMatchings } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountDepositMatchings";
import { IVirtualAccountDepositMatchings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDepositMatchings";

export async function test_api_virtualAccount_depositMatchings_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountDepositMatchings =
    await api.functional.virtualAccount.depositMatchings.patch(connection, {
      body: typia.random<IVirtualAccountDepositMatchings.IRequest>(),
    });
  typia.assert(output);
}
