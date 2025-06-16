import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountMallSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountMallSync";

export async function test_api_virtualAccount_mallSyncs_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountMallSync =
    await api.functional.virtualAccount.mallSyncs.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountMallSync.IUpdate>(),
    });
  typia.assert(output);
}
