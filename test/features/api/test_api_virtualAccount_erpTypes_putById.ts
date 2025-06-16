import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountErpType } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountErpType";

export async function test_api_virtualAccount_erpTypes_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountErpType =
    await api.functional.virtualAccount.erpTypes.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountErpType.IUpdate>(),
    });
  typia.assert(output);
}
