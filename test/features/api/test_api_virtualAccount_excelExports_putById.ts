import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IVirtualAccountExcelExports } from "@ORGANIZATION/PROJECT-api/lib/structures/IVirtualAccountExcelExports";

export async function test_api_virtualAccount_excelExports_putById(
  connection: api.IConnection,
) {
  const output: IVirtualAccountExcelExports =
    await api.functional.virtualAccount.excelExports.putById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
      body: typia.random<IVirtualAccountExcelExports.IUpdate>(),
    });
  typia.assert(output);
}
