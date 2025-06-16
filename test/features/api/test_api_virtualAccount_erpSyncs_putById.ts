import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountErpSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountErpSync";

export async function test_api_virtualAccount_erpSyncs_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountErpSync =
    await api.functional.virtualAccount.erpSyncs.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountErpSync.IUpdate>(),
    });
  typia.assert(output);
}
