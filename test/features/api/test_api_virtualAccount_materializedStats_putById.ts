import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { virtual_account_materialized_stats } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_materialized_stats";

export async function test_api_virtualAccount_materializedStats_putById(
  connection: api.IConnection,
) {
  const output: virtual_account_materialized_stats =
    await api.functional.virtualAccount.materializedStats.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<virtual_account_materialized_stats.IUpdate>(),
    });
  typia.assert(output);
}
