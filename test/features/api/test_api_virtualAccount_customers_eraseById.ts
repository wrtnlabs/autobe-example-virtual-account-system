import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountCustomer } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountCustomer";

export async function test_api_virtualAccount_customers_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountCustomer =
    await api.functional.virtualAccount.customers.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
