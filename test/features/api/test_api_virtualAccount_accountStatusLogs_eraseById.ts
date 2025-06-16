import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountAccountStatusLogs } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountAccountStatusLogs";

export async function test_api_virtualAccount_accountStatusLogs_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountAccountStatusLogs.IDeleteResult =
    await api.functional.virtualAccount.accountStatusLogs.eraseById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
      },
    );
  typia.assert(output);
}
