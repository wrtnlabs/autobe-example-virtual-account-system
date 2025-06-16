import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountMaterializedStats } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountMaterializedStats";
import { IVirtualAccountMaterializedStats } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountMaterializedStats";

export async function test_api_virtualAccount_materializedStats_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountMaterializedStats =
    await api.functional.virtualAccount.materializedStats.patch(connection, {
      body: typia.random<IVirtualAccountMaterializedStats.IRequest>(),
    });
  typia.assert(output);
}
