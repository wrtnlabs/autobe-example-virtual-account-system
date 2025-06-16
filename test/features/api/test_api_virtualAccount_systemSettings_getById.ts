import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { virtual_account_system_settings } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_system_settings";

export async function test_api_virtualAccount_systemSettings_getById(
  connection: api.IConnection,
) {
  const output: virtual_account_system_settings =
    await api.functional.virtualAccount.systemSettings.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
