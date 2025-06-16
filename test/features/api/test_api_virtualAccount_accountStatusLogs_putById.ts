import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountAccountStatusLogs } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAccountStatusLogs";

export async function test_api_virtualAccount_accountStatusLogs_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountAccountStatusLogs =
    await api.functional.virtualAccount.accountStatusLogs.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountAccountStatusLogs.IUpdate>(),
    });
  typia.assert(output);
}
