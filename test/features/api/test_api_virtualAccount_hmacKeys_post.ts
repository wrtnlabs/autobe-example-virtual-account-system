import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountHmacKeys } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountHmacKeys";

export async function test_api_virtualAccount_hmacKeys_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountHmacKeys =
    await api.functional.virtualAccount.hmacKeys.post(connection, {
      body: typia.random<IVirtualAccountHmacKeys.ICreate>(),
    });
  typia.assert(output);
}
