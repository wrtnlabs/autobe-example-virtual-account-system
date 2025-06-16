import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountCustomer } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountCustomer";

export async function test_api_virtualAccount_customers_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountCustomer =
    await api.functional.virtualAccount.customers.post(connection, {
      body: typia.random<IVirtualAccountCustomer.ICreate>(),
    });
  typia.assert(output);
}
