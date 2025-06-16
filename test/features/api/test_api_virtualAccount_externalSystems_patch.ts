import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountExternalSystem } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountExternalSystem";
import { IVirtualAccountExternalSystem } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExternalSystem";

export async function test_api_virtualAccount_externalSystems_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountExternalSystem =
    await api.functional.virtualAccount.externalSystems.patch(connection, {
      body: typia.random<IVirtualAccountExternalSystem.IRequest>(),
    });
  typia.assert(output);
}
