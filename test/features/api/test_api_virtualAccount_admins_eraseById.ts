import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountAdmin } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAdmin";

export async function test_api_virtualAccount_admins_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountAdmin =
    await api.functional.virtualAccount.admins.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
