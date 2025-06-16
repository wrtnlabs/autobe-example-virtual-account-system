import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IOperationResult } from "@ORGANIZATION/PROJECT-api/lib/structures/IOperationResult";

export async function test_api_virtualAccount_roles_eraseById(
  connection: api.IConnection,
) {
  const output: IOperationResult =
    await api.functional.virtualAccount.roles.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
