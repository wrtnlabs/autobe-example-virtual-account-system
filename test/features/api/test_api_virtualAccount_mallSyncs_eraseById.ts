import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountMallSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountMallSync";

export async function test_api_virtualAccount_mallSyncs_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountMallSync.IDeleteResult =
    await api.functional.virtualAccount.mallSyncs.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
