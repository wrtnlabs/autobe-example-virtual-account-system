import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountBank } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountBank";

export async function test_api_virtualAccount_banks_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountBank =
    await api.functional.virtualAccount.banks.post(connection, {
      body: typia.random<IVirtualAccountBank.ICreate>(),
    });
  typia.assert(output);
}
