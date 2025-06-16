import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountAuditLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountAuditLog";
import { IVirtualAccountAuditLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAuditLog";

export async function test_api_virtualAccount_auditLogs_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountAuditLog =
    await api.functional.virtualAccount.auditLogs.patch(connection, {
      body: typia.random<IVirtualAccountAuditLog.IRequest>(),
    });
  typia.assert(output);
}
