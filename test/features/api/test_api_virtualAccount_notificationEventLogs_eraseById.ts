import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

export async function test_api_virtualAccount_notificationEventLogs_eraseById(
  connection: api.IConnection,
) {
  const output =
    await api.functional.virtualAccount.notificationEventLogs.eraseById(
      connection,
      {
        id: typia.random<string & tags.Format<"uuid">>(),
      },
    );
  typia.assert(output);
}
