import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountPgProvider } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountPgProvider";

export async function test_api_virtualAccount_pgProviders_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountPgProvider =
    await api.functional.virtualAccount.pgProviders.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
