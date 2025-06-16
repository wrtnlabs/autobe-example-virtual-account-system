import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountDashboardSettings } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountDashboardSettings";

export async function test_api_virtualAccount_dashboardSettings_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountDashboardSettings.IDeleteResult =
    await api.functional.virtualAccount.dashboardSettings.eraseById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
      },
    );
  typia.assert(output);
}
