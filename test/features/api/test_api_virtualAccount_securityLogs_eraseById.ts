import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

export async function test_api_virtualAccount_securityLogs_eraseById(
  connection: api.IConnection,
) {
  const output = await api.functional.virtualAccount.securityLogs.eraseById(
    connection,
    {
      id: typia.random<string & tags.Format<"uuid">>(),
    },
  );
  typia.assert(output);
}
