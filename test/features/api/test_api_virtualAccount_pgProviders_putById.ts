import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountPgProvider } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountPgProvider";

export async function test_api_virtualAccount_pgProviders_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountPgProvider =
    await api.functional.virtualAccount.pgProviders.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountPgProvider.IUpdate>(),
    });
  typia.assert(output);
}
