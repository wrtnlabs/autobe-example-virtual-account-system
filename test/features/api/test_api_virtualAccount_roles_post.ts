import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountRole } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountRole";

export async function test_api_virtualAccount_roles_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountRole =
    await api.functional.virtualAccount.roles.post(connection, {
      body: typia.random<IVirtualAccountRole.ICreate>(),
    });
  typia.assert(output);
}
