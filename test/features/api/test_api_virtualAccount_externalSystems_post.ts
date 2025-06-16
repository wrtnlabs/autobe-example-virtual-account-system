import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountExternalSystems } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExternalSystems";

export async function test_api_virtualAccount_externalSystems_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExternalSystems =
    await api.functional.virtualAccount.externalSystems.post(connection, {
      body: typia.random<IVirtualAccountExternalSystems.ICreate>(),
    });
  typia.assert(output);
}
