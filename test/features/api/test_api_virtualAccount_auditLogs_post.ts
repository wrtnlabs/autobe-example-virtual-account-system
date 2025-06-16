import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountAuditLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAuditLog";

export async function test_api_virtualAccount_auditLogs_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountAuditLog =
    await api.functional.virtualAccount.auditLogs.post(connection, {
      body: typia.random<IVirtualAccountAuditLog.ICreate>(),
    });
  typia.assert(output);
}
