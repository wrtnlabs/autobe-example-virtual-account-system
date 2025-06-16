import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountDepositError } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDepositError";

export async function test_api_virtualAccount_depositErrors_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDepositError =
    await api.functional.virtualAccount.depositErrors.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountDepositError.IUpdate>(),
    });
  typia.assert(output);
}
