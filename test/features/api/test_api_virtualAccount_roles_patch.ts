import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountRole } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountRole";
import { IVirtualAccountRole } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountRole";

export async function test_api_virtualAccount_roles_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountRole =
    await api.functional.virtualAccount.roles.patch(connection, {
      body: typia.random<IVirtualAccountRole.IRequest>(),
    });
  typia.assert(output);
}
