import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountAccountStatusLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAccountStatusLog";

export async function test_api_virtualAccount_accountStatusLogs_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountAccountStatusLog =
    await api.functional.virtualAccount.accountStatusLogs.post(connection, {
      body: typia.random<IVirtualAccountAccountStatusLog.ICreate>(),
    });
  typia.assert(output);
}
