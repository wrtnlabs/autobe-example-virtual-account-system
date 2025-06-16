import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountErpSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountErpSync";
import { IVirtualAccountErpSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountErpSync";

export async function test_api_virtualAccount_erpSyncs_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountErpSync =
    await api.functional.virtualAccount.erpSyncs.patch(connection, {
      body: typia.random<IVirtualAccountErpSync.IRequest>(),
    });
  typia.assert(output);
}
