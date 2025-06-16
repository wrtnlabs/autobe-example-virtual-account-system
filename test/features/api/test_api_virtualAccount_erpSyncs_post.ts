import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountErpSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountErpSync";

export async function test_api_virtualAccount_erpSyncs_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountErpSync =
    await api.functional.virtualAccount.erpSyncs.post(connection, {
      body: typia.random<IVirtualAccountErpSync.ICreate>(),
    });
  typia.assert(output);
}
