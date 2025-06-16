import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountSecurityLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountSecurityLog";
import { IVirtualAccountSecurityLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountSecurityLog";

export async function test_api_virtualAccount_securityLogs_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountSecurityLog =
    await api.functional.virtualAccount.securityLogs.patch(connection, {
      body: typia.random<IVirtualAccountSecurityLog.IRequest>(),
    });
  typia.assert(output);
}
