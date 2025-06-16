import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountAuditLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAuditLog";

export async function test_api_virtualAccount_auditLogs_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountAuditLog =
    await api.functional.virtualAccount.auditLogs.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountAuditLog.IUpdate>(),
    });
  typia.assert(output);
}
