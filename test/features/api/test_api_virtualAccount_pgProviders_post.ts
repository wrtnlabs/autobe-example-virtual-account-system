import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountPgProvider } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountPgProvider";

export async function test_api_virtualAccount_pgProviders_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountPgProvider =
    await api.functional.virtualAccount.pgProviders.post(connection, {
      body: typia.random<IVirtualAccountPgProvider.ICreate>(),
    });
  typia.assert(output);
}
