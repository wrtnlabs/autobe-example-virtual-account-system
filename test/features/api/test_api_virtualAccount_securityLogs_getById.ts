import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountSecurityLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountSecurityLog";

export async function test_api_virtualAccount_securityLogs_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountSecurityLog =
    await api.functional.virtualAccount.securityLogs.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
