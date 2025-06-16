import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountDepositError } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountDepositError";
import { IVirtualAccountDepositError } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDepositError";

export async function test_api_virtualAccount_depositErrors_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountDepositError =
    await api.functional.virtualAccount.depositErrors.patch(connection, {
      body: typia.random<IVirtualAccountDepositError.IRequest>(),
    });
  typia.assert(output);
}
