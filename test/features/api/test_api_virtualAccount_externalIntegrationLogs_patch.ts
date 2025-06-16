import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountExternalIntegrationLogs } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountExternalIntegrationLogs";
import { IVirtualAccountExternalIntegrationLogs } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExternalIntegrationLogs";

export async function test_api_virtualAccount_externalIntegrationLogs_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountExternalIntegrationLogs =
    await api.functional.virtualAccount.externalIntegrationLogs.patch(
      connection,
      {
        body: typia.random<IVirtualAccountExternalIntegrationLogs.IRequest>(),
      },
    );
  typia.assert(output);
}
