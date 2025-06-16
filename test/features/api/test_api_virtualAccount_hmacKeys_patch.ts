import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountHmacKeys } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountHmacKeys";
import { IVirtualAccountHmacKeys } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountHmacKeys";

export async function test_api_virtualAccount_hmacKeys_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountHmacKeys =
    await api.functional.virtualAccount.hmacKeys.patch(connection, {
      body: typia.random<IVirtualAccountHmacKeys.IRequest>(),
    });
  typia.assert(output);
}
