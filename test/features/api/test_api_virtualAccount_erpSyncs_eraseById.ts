import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountErpSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountErpSync";

export async function test_api_virtualAccount_erpSyncs_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountErpSync.IDeleteResult =
    await api.functional.virtualAccount.erpSyncs.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
