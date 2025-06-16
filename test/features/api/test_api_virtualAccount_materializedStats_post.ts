import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { virtual_account_materialized_stats } from "@ORGANIZATION/PROJECT-api/lib/structures/virtual_account_materialized_stats";

export async function test_api_virtualAccount_materializedStats_post(
  connection: api.IConnection,
) {
  const output: virtual_account_materialized_stats =
    await api.functional.virtualAccount.materializedStats.post(connection, {
      body: typia.random<virtual_account_materialized_stats.ICreate>(),
    });
  typia.assert(output);
}
