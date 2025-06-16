import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountSecurityLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountSecurityLog";

export async function test_api_virtualAccount_securityLogs_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountSecurityLog =
    await api.functional.virtualAccount.securityLogs.post(connection, {
      body: typia.random<IVirtualAccountSecurityLog.ICreate>(),
    });
  typia.assert(output);
}
