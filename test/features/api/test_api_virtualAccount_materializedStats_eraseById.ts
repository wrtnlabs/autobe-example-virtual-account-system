import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { virtual_account_materialized_stats } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_materialized_stats";

export async function test_api_virtualAccount_materializedStats_eraseById(
  connection: api.IConnection,
) {
  const output: virtual_account_materialized_stats.IDeleteResponse =
    await api.functional.virtualAccount.materializedStats.eraseById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
      },
    );
  typia.assert(output);
}
