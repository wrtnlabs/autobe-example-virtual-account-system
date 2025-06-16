import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountRole } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountRole";

export async function test_api_virtualAccount_roles_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountRole =
    await api.functional.virtualAccount.roles.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountRole.IUpdate>(),
    });
  typia.assert(output);
}
