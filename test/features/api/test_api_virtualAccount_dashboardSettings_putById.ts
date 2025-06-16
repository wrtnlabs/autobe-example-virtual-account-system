import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountDashboardSettings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDashboardSettings";

export async function test_api_virtualAccount_dashboardSettings_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDashboardSettings =
    await api.functional.virtualAccount.dashboardSettings.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountDashboardSettings.IUpdate>(),
    });
  typia.assert(output);
}
