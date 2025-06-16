import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountExternalIntegrationLogs } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExternalIntegrationLogs";

export async function test_api_virtualAccount_externalIntegrationLogs_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExternalIntegrationLogs.IDeleteResult =
    await api.functional.virtualAccount.externalIntegrationLogs.eraseById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
      },
    );
  typia.assert(output);
}
