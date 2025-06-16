import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountBank } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountBank";
import { IVirtualAccountBank } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountBank";

export async function test_api_virtualAccount_banks_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountBank =
    await api.functional.virtualAccount.banks.patch(connection, {
      body: typia.random<IVirtualAccountBank.IRequest>(),
    });
  typia.assert(output);
}
