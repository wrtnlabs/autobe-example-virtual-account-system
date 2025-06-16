import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountErpTypes } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountErpTypes";

export async function test_api_virtualAccount_erpTypes_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountErpTypes =
    await api.functional.virtualAccount.erpTypes.post(connection, {
      body: typia.random<IVirtualAccountErpTypes.ICreate>(),
    });
  typia.assert(output);
}
