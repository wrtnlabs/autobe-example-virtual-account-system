import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountRole } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountRole";

export async function test_api_virtualAccount_roles_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountRole =
    await api.functional.virtualAccount.roles.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
