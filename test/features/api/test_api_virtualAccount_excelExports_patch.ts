import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIVirtualAccountExcelExports } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIVirtualAccountExcelExports";
import { IVirtualAccountExcelExports } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExcelExports";

export async function test_api_virtualAccount_excelExports_patch(
  connection: api.IConnection,
) {
  const output: IPageIVirtualAccountExcelExports =
    await api.functional.virtualAccount.excelExports.patch(connection, {
      body: typia.random<IVirtualAccountExcelExports.IRequest>(),
    });
  typia.assert(output);
}
