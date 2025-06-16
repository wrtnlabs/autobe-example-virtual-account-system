import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountBank } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountBank";

export async function test_api_virtualAccount_banks_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountBank =
    await api.functional.virtualAccount.banks.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountBank.IUpdate>(),
    });
  typia.assert(output);
}
