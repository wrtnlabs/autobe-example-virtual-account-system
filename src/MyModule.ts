import { Module } from "@nestjs/common";

import { VirtualaccountCustomersController } from "./controllers/virtualAccount/customers/VirtualaccountCustomersController";
import { VirtualaccountAdminsController } from "./controllers/virtualAccount/admins/VirtualaccountAdminsController";
import { VirtualaccountSuperadminsController } from "./controllers/virtualAccount/superAdmins/VirtualaccountSuperadminsController";
import { VirtualaccountRolesController } from "./controllers/virtualAccount/roles/VirtualaccountRolesController";
import { VirtualaccountPermissionsController } from "./controllers/virtualAccount/permissions/VirtualaccountPermissionsController";
import { VirtualaccountRolepermissionsController } from "./controllers/virtualAccount/rolePermissions/VirtualaccountRolepermissionsController";
import { VirtualaccountBanksController } from "./controllers/virtualAccount/banks/VirtualaccountBanksController";
import { VirtualaccountPgprovidersController } from "./controllers/virtualAccount/pgProviders/VirtualaccountPgprovidersController";
import { VirtualaccountVirtualaccountsController } from "./controllers/virtualAccount/virtualAccounts/VirtualaccountVirtualaccountsController";
import { VirtualaccountAccountstatuslogsController } from "./controllers/virtualAccount/accountStatusLogs/VirtualaccountAccountstatuslogsController";
import { VirtualaccountDepositsController } from "./controllers/virtualAccount/deposits/VirtualaccountDepositsController";
import { VirtualaccountDepositmatchingsController } from "./controllers/virtualAccount/depositMatchings/VirtualaccountDepositmatchingsController";
import { VirtualaccountDepositerrorsController } from "./controllers/virtualAccount/depositErrors/VirtualaccountDepositerrorsController";
import { VirtualaccountNotificationsController } from "./controllers/virtualAccount/notifications/VirtualaccountNotificationsController";
import { VirtualaccountNotificationtemplatesController } from "./controllers/virtualAccount/notificationTemplates/VirtualaccountNotificationtemplatesController";
import { VirtualaccountNotificationchannelsController } from "./controllers/virtualAccount/notificationChannels/VirtualaccountNotificationchannelsController";
import { VirtualaccountNotificationeventlogsController } from "./controllers/virtualAccount/notificationEventLogs/VirtualaccountNotificationeventlogsController";
import { VirtualaccountAuditlogsController } from "./controllers/virtualAccount/auditLogs/VirtualaccountAuditlogsController";
import { VirtualaccountSecuritylogsController } from "./controllers/virtualAccount/securityLogs/VirtualaccountSecuritylogsController";
import { VirtualaccountExternalsystemsController } from "./controllers/virtualAccount/externalSystems/VirtualaccountExternalsystemsController";
import { VirtualaccountExternalintegrationlogsController } from "./controllers/virtualAccount/externalIntegrationLogs/VirtualaccountExternalintegrationlogsController";
import { VirtualaccountErptypesController } from "./controllers/virtualAccount/erpTypes/VirtualaccountErptypesController";
import { VirtualaccountErpsyncsController } from "./controllers/virtualAccount/erpSyncs/VirtualaccountErpsyncsController";
import { VirtualaccountMallsyncsController } from "./controllers/virtualAccount/mallSyncs/VirtualaccountMallsyncsController";
import { VirtualaccountDashboardsettingsController } from "./controllers/virtualAccount/dashboardSettings/VirtualaccountDashboardsettingsController";
import { VirtualaccountExcelexportsController } from "./controllers/virtualAccount/excelExports/VirtualaccountExcelexportsController";
import { VirtualaccountAdminalertsController } from "./controllers/virtualAccount/adminAlerts/VirtualaccountAdminalertsController";
import { VirtualaccountAdminactivitylogsController } from "./controllers/virtualAccount/adminActivityLogs/VirtualaccountAdminactivitylogsController";
import { VirtualaccountSystemsettingsController } from "./controllers/virtualAccount/systemSettings/VirtualaccountSystemsettingsController";
import { VirtualaccountOauthclientsController } from "./controllers/virtualAccount/oauthClients/VirtualaccountOauthclientsController";
import { VirtualaccountHmackeysController } from "./controllers/virtualAccount/hmacKeys/VirtualaccountHmackeysController";
import { VirtualaccountMaterializedstatsController } from "./controllers/virtualAccount/materializedStats/VirtualaccountMaterializedstatsController";

@Module({
  controllers: [
    VirtualaccountCustomersController,
    VirtualaccountAdminsController,
    VirtualaccountSuperadminsController,
    VirtualaccountRolesController,
    VirtualaccountPermissionsController,
    VirtualaccountRolepermissionsController,
    VirtualaccountBanksController,
    VirtualaccountPgprovidersController,
    VirtualaccountVirtualaccountsController,
    VirtualaccountAccountstatuslogsController,
    VirtualaccountDepositsController,
    VirtualaccountDepositmatchingsController,
    VirtualaccountDepositerrorsController,
    VirtualaccountNotificationsController,
    VirtualaccountNotificationtemplatesController,
    VirtualaccountNotificationchannelsController,
    VirtualaccountNotificationeventlogsController,
    VirtualaccountAuditlogsController,
    VirtualaccountSecuritylogsController,
    VirtualaccountExternalsystemsController,
    VirtualaccountExternalintegrationlogsController,
    VirtualaccountErptypesController,
    VirtualaccountErpsyncsController,
    VirtualaccountMallsyncsController,
    VirtualaccountDashboardsettingsController,
    VirtualaccountExcelexportsController,
    VirtualaccountAdminalertsController,
    VirtualaccountAdminactivitylogsController,
    VirtualaccountSystemsettingsController,
    VirtualaccountOauthclientsController,
    VirtualaccountHmackeysController,
    VirtualaccountMaterializedstatsController,
  ],
})
export class MyModule {}
