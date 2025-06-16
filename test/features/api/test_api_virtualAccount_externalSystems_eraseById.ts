import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountExternalSystems } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExternalSystems";

export async function test_api_virtualAccount_externalSystems_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExternalSystems.IDeleteResult =
    await api.functional.virtualAccount.externalSystems.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
