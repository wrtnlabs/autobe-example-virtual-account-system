import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountExternalIntegrationLogs } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExternalIntegrationLogs";

export async function test_api_virtualAccount_externalIntegrationLogs_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExternalIntegrationLogs =
    await api.functional.virtualAccount.externalIntegrationLogs.putById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
        body: typia.random<IVirtualAccountExternalIntegrationLogs.IUpdate>(),
      },
    );
  typia.assert(output);
}
