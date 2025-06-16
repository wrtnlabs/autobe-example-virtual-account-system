import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountErpType } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountErpType";

export async function test_api_virtualAccount_erpTypes_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountErpType.IDeleteResult =
    await api.functional.virtualAccount.erpTypes.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
