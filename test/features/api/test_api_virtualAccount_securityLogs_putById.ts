import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountSecurityLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountSecurityLog";

export async function test_api_virtualAccount_securityLogs_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountSecurityLog =
    await api.functional.virtualAccount.securityLogs.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountSecurityLog.IUpdate>(),
    });
  typia.assert(output);
}
