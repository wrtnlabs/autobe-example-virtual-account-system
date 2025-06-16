import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountMallSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountMallSync";
import { IVirtualAccountMallSync } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountMallSync";

export async function test_api_virtualAccount_mallSyncs_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountMallSync =
    await api.functional.virtualAccount.mallSyncs.patch(connection, {
      body: typia.random<IVirtualAccountMallSync.IRequest>(),
    });
  typia.assert(output);
}
