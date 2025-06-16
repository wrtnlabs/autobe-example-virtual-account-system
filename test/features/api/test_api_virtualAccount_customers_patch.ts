import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountCustomer } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountCustomer";
import { IVirtualAccountCustomer } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountCustomer";

export async function test_api_virtualAccount_customers_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountCustomer =
    await api.functional.virtualAccount.customers.patch(connection, {
      body: typia.random<IVirtualAccountCustomer.IRequest>(),
    });
  typia.assert(output);
}
