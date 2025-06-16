import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountAccountStatusLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountAccountStatusLog";
import { IVirtualAccountAccountStatusLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAccountStatusLog";

export async function test_api_virtualAccount_accountStatusLogs_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountAccountStatusLog =
    await api.functional.virtualAccount.accountStatusLogs.patch(connection, {
      body: typia.random<IVirtualAccountAccountStatusLog.IRequest>(),
    });
  typia.assert(output);
}
