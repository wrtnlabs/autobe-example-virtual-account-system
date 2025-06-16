import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountExcelExports } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExcelExports";

export async function test_api_virtualAccount_excelExports_eraseById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExcelExports.IDeleteResult =
    await api.functional.virtualAccount.excelExports.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
