import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountErpTypes } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountErpTypes";
import { IVirtualAccountErpTypes } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountErpTypes";

export async function test_api_virtualAccount_erpTypes_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountErpTypes =
    await api.functional.virtualAccount.erpTypes.patch(connection, {
      body: typia.random<IVirtualAccountErpTypes.IRequest>(),
    });
  typia.assert(output);
}
