import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountOAuthClients } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountOAuthClients";

export async function test_api_virtualAccount_oauthClients_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountOAuthClients.IDeleteResult =
    await api.functional.virtualAccount.oauthClients.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
