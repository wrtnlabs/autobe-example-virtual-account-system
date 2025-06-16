import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountOAuthClients } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountOAuthClients";

export async function test_api_virtualAccount_oauthClients_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountOAuthClients =
    await api.functional.virtualAccount.oauthClients.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountOAuthClients.IUpdate>(),
    });
  typia.assert(output);
}
