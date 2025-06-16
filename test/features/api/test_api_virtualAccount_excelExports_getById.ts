import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountExcelExports } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExcelExports";

export async function test_api_virtualAccount_excelExports_getById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExcelExports =
    await api.functional.virtualAccount.excelExports.getById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
