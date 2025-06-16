import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountDashboardSettings } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountDashboardSettings";
import { IVirtualAccountDashboardSettings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDashboardSettings";

export async function test_api_virtualAccount_dashboardSettings_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountDashboardSettings =
    await api.functional.virtualAccount.dashboardSettings.patch(connection, {
      body: typia.random<IVirtualAccountDashboardSettings.IRequest>(),
    });
  typia.assert(output);
}
