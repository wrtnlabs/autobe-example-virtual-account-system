import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountSystemSettings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountSystemSettings";

export async function test_api_virtualAccount_systemSettings_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountSystemSettings.IDeleteResult =
    await api.functional.virtualAccount.systemSettings.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
