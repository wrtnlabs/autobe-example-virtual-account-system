import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountDashboardSettings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDashboardSettings";

export async function test_api_virtualAccount_dashboardSettings_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDashboardSettings =
    await api.functional.virtualAccount.dashboardSettings.post(connection, {
      body: typia.random<IVirtualAccountDashboardSettings.ICreate>(),
    });
  typia.assert(output);
}
