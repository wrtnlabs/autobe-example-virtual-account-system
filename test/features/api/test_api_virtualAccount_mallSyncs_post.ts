import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountMallSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountMallSync";

export async function test_api_virtualAccount_mallSyncs_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountMallSync =
    await api.functional.virtualAccount.mallSyncs.post(connection, {
      body: typia.random<IVirtualAccountMallSync.ICreate>(),
    });
  typia.assert(output);
}
