import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPagevirtual_account_system_settings } from "@ORGANIZATION/PROJECT-api/lib/structures/IPagevirtual_account_system_settings";
import { virtual_account_system_settings } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_system_settings";

export async function test_api_virtualAccount_systemSettings_patch(
  connection: api.IConnection,
) {
  const output: IPagevirtual_account_system_settings =
    await api.functional.virtualAccount.systemSettings.patch(connection, {
      body: typia.random<virtual_account_system_settings.IRequest>(),
    });
  typia.assert(output);
}
