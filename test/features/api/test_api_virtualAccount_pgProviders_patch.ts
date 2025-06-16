import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountPgProvider } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountPgProvider";
import { IVirtualAccountPgProvider } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountPgProvider";

export async function test_api_virtualAccount_pgProviders_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountPgProvider =
    await api.functional.virtualAccount.pgProviders.patch(connection, {
      body: typia.random<IVirtualAccountPgProvider.IRequest>(),
    });
  typia.assert(output);
}
