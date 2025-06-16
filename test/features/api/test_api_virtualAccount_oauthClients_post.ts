import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountOAuthClients } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountOAuthClients";

export async function test_api_virtualAccount_oauthClients_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountOAuthClients =
    await api.functional.virtualAccount.oauthClients.post(connection, {
      body: typia.random<IVirtualAccountOAuthClients.ICreate>(),
    });
  typia.assert(output);
}
