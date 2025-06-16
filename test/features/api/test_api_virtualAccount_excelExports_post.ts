import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IVirtualAccountExcelExports } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExcelExports";

export async function test_api_virtualAccount_excelExports_post(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExcelExports =
    await api.functional.virtualAccount.excelExports.post(connection, {
      body: typia.random<IVirtualAccountExcelExports.ICreate>(),
    });
  typia.assert(output);
}
