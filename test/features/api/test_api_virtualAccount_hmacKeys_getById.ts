import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountHmacKeys } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountHmacKeys";

export async function test_api_virtualAccount_hmacKeys_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountHmacKeys =
    await api.functional.virtualAccount.hmacKeys.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
