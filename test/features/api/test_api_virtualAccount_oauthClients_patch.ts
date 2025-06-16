import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountOAuthClients } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountOAuthClients";
import { IVirtualAccountOAuthClients } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountOAuthClients";

export async function test_api_virtualAccount_oauthClients_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountOAuthClients =
    await api.functional.virtualAccount.oauthClients.patch(connection, {
      body: typia.random<IVirtualAccountOAuthClients.IRequest>(),
    });
  typia.assert(output);
}
