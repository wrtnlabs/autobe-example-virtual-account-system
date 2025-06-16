import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountErpTypes } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountErpTypes";

export async function test_api_virtualAccount_erpTypes_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountErpTypes =
    await api.functional.virtualAccount.erpTypes.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
