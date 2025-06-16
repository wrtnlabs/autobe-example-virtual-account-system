import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountBank } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountBank";

export async function test_api_virtualAccount_banks_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountBank =
    await api.functional.virtualAccount.banks.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
