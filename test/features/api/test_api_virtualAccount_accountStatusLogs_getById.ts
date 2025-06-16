import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountAccountStatusLog } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAccountStatusLog";

export async function test_api_virtualAccount_accountStatusLogs_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountAccountStatusLog =
    await api.functional.virtualAccount.accountStatusLogs.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
