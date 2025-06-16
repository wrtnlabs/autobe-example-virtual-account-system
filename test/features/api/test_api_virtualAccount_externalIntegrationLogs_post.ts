import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountExternalIntegrationLogs } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExternalIntegrationLogs";

export async function test_api_virtualAccount_externalIntegrationLogs_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExternalIntegrationLogs =
    await api.functional.virtualAccount.externalIntegrationLogs.post(
      connection,
      {
        body: typia.random<IVirtualAccountExternalIntegrationLogs.ICreate>(),
      },
    );
  typia.assert(output);
}
