import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountHmacKeys } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountHmacKeys";

export async function test_api_virtualAccount_hmacKeys_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountHmacKeys.IDeleteResult =
    await api.functional.virtualAccount.hmacKeys.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
