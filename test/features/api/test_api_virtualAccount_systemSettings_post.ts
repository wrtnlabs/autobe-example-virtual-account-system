import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { virtual_account_system_settings } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_system_settings";

export async function test_api_virtualAccount_systemSettings_post(
  connection: api.IConnection,
) {
  const output: virtual_account_system_settings =
    await api.functional.virtualAccount.systemSettings.post(connection, {
      body: typia.random<virtual_account_system_settings.ICreate>(),
    });
  typia.assert(output);
}
