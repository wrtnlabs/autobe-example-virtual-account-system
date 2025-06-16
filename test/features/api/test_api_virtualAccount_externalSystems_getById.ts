import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountExternalSystems } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExternalSystems";

export async function test_api_virtualAccount_externalSystems_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExternalSystems =
    await api.functional.virtualAccount.externalSystems.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
