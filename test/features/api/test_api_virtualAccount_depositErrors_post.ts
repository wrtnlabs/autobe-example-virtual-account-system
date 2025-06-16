import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountDepositError } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDepositError";

export async function test_api_virtualAccount_depositErrors_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDepositError =
    await api.functional.virtualAccount.depositErrors.post(connection, {
      body: typia.random<IVirtualAccountDepositError.ICreate>(),
    });
  typia.assert(output);
}
