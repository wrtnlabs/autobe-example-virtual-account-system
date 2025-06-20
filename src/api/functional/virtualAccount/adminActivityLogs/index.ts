import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia, { tags } from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { virtual_account_admin_activity_logs } from "../../../structures/virtual_account_admin_activity_logs";
import { IPagevirtual_account_admin_activity_logs } from "../../../structures/IPagevirtual_account_admin_activity_logs";

/**
 * Create a new admin activity log entry (virtual_account_admin_activity_logs
 * table).
 *
 * This operation logs a single admin action, such as an Excel export,
 * permission or role change, notification policy update, dashboard settings
 * change, or other sensitive/critical admin event. The input must provide all
 * atomic fields: action type, affected entity, optional target entity ID,
 * result, IP address, meta/context JSON, and timestamp. The operation assigns
 * the originated admin (actor) and writes a normalized log row.
 *
 * Only system-internal or privileged user agents should invoke this API
 * directly (it is usually called by backend services during admin operations).
 * Success returns the stored log record; errors return validation (422), RBAC
 * (403), or system (500) codes. All fields are validated and RBAC is enforced
 * as in requirements.
 *
 * Should be used together with PATCH/GET/PUT/DELETE for a full audit trail
 * lifecycle.
 *
 * @param props.body New admin activity log event info (action, result, context,
 *   etc)
 * @path /virtualAccount/adminActivityLogs
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export async function post(
  connection: IConnection,
  props: post.Props,
): Promise<post.Response> {
  return !!connection.simulate
    ? post.simulate(connection, props)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...post.METADATA,
          path: post.path(),
          status: null,
        },
        props.body,
      );
}
export namespace post {
  export type Props = {
    /** New admin activity log event info (action, result, context, etc) */
    body: virtual_account_admin_activity_logs.ICreate;
  };
  export type Body = virtual_account_admin_activity_logs.ICreate;
  export type Response = virtual_account_admin_activity_logs;

  export const METADATA = {
    method: "POST",
    path: "/virtualAccount/adminActivityLogs",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/virtualAccount/adminActivityLogs";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): virtual_account_admin_activity_logs =>
    typia.random<virtual_account_admin_activity_logs>(g);
  export const simulate = (
    connection: IConnection,
    props: post.Props,
  ): Response => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: post.path(),
      contentType: "application/json",
    });
    try {
      assert.body(() => typia.assert(props.body));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * List/search admin activity logs (virtual_account_admin_activity_logs table).
 *
 * This operation enables authorized admin users to search the full activity
 * log, filtering by actor, event type, date/time, target entity, result, or
 * free-text search on the meta JSON/context fields. Typical use cases include
 * forensic investigations, export for audit reporting, or tracking recent admin
 * actions (such as bulk exports, permission changes, alert operations, etc).
 *
 * The request body must specify search criteria (actor, type, entity, range,
 * etc) and pagination parameters (offset/limit or page/size). Sorting is
 * supported by timestamp or other available columns. This endpoint is
 * RBAC-protected (admin/super admin only) and all reads are themselves logged
 * for compliance.
 *
 * Returns: A paginated list of activity log records. Errors are produced on
 * invalid queries or permission problems.
 *
 * Related APIs: Use POST for new activity, GET for details, PUT for update. For
 * Excel export, a different API should be used.
 *
 * @param props.body Search/pagination/sort info for listing admin activity logs
 * @path /virtualAccount/adminActivityLogs
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export async function patch(
  connection: IConnection,
  props: patch.Props,
): Promise<patch.Response> {
  return !!connection.simulate
    ? patch.simulate(connection, props)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patch.METADATA,
          path: patch.path(),
          status: null,
        },
        props.body,
      );
}
export namespace patch {
  export type Props = {
    /** Search/pagination/sort info for listing admin activity logs */
    body: virtual_account_admin_activity_logs.IRequest;
  };
  export type Body = virtual_account_admin_activity_logs.IRequest;
  export type Response = IPagevirtual_account_admin_activity_logs;

  export const METADATA = {
    method: "PATCH",
    path: "/virtualAccount/adminActivityLogs",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/virtualAccount/adminActivityLogs";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPagevirtual_account_admin_activity_logs =>
    typia.random<IPagevirtual_account_admin_activity_logs>(g);
  export const simulate = (
    connection: IConnection,
    props: patch.Props,
  ): Response => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patch.path(),
      contentType: "application/json",
    });
    try {
      assert.body(() => typia.assert(props.body));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get a single admin activity log detail by ID
 * (virtual_account_admin_activity_logs table).
 *
 * Returns the complete record of a single admin activity log, given its UUID.
 * Accessible only to authorized admin and super admin users according to RBAC
 * policy. The returned record includes all columns (action type, entity,
 * target, result, IP, context, timestamp).
 *
 * If the activity log does not exist, an error is returned (404). Access is
 * tracked in audit logs for compliance. Input validation ensures UUID and
 * access constraints.
 *
 * Use this together with PATCH (list/search logs), POST/PUT (logs
 * creation/update), and DELETE (for removal, if allowed by policy).
 *
 * @param props.id Admin activity log record ID (UUID)
 * @path /virtualAccount/adminActivityLogs/:id
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export async function getById(
  connection: IConnection,
  props: getById.Props,
): Promise<getById.Response> {
  return !!connection.simulate
    ? getById.simulate(connection, props)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getById.METADATA,
          path: getById.path(props),
          status: null,
        },
      );
}
export namespace getById {
  export type Props = {
    /** Admin activity log record ID (UUID) */
    id: string & tags.Format<"uuid">;
  };
  export type Response = virtual_account_admin_activity_logs;

  export const METADATA = {
    method: "GET",
    path: "/virtualAccount/adminActivityLogs/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (props: Props) =>
    `/virtualAccount/adminActivityLogs/${encodeURIComponent(props.id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): virtual_account_admin_activity_logs =>
    typia.random<virtual_account_admin_activity_logs>(g);
  export const simulate = (
    connection: IConnection,
    props: getById.Props,
  ): Response => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getById.path(props),
      contentType: "application/json",
    });
    try {
      assert.param("id")(() => typia.assert(props.id));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Update an admin activity log by ID (virtual_account_admin_activity_logs
 * table).
 *
 * This operation updates context, result status, or metadata of an existing
 * admin activity log record (identified by ID). Typical use: after an initial
 * insert, an error or detail must be corrected (e.g., post-facto error code,
 * result, or meta/context correction). Only allowed for admins/super admins
 * with direct audit privilege; RBAC and audit handling strictly enforced.
 *
 * The request body specifies updatable fields (meta JSON, result, etc).
 * Non-modifiable fields are protected as per business rules (e.g., action_type,
 * occurred_at are immutable by default). Success returns the updated record;
 * errors include 404 (not found), 409 (immutable/invalid update), 403
 * (forbidden), and 422 (validation). All changes are appended to the audit log
 * per compliance policy.
 *
 * Use together with PATCH (search), GET (detail), POST (create), DELETE (if
 * permitted).
 *
 * @param props.id Target admin activity log record ID (UUID)
 * @param props.body Update data for admin activity log (meta/result corrections
 *   only)
 * @path /virtualAccount/adminActivityLogs/:id
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export async function putById(
  connection: IConnection,
  props: putById.Props,
): Promise<putById.Response> {
  return !!connection.simulate
    ? putById.simulate(connection, props)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putById.METADATA,
          path: putById.path(props),
          status: null,
        },
        props.body,
      );
}
export namespace putById {
  export type Props = {
    /** Target admin activity log record ID (UUID) */
    id: string & tags.Format<"uuid">;

    /** Update data for admin activity log (meta/result corrections only) */
    body: virtual_account_admin_activity_logs.IUpdate;
  };
  export type Body = virtual_account_admin_activity_logs.IUpdate;
  export type Response = virtual_account_admin_activity_logs;

  export const METADATA = {
    method: "PUT",
    path: "/virtualAccount/adminActivityLogs/:id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (props: Omit<Props, "body">) =>
    `/virtualAccount/adminActivityLogs/${encodeURIComponent(props.id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): virtual_account_admin_activity_logs =>
    typia.random<virtual_account_admin_activity_logs>(g);
  export const simulate = (
    connection: IConnection,
    props: putById.Props,
  ): Response => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putById.path(props),
      contentType: "application/json",
    });
    try {
      assert.param("id")(() => typia.assert(props.id));
      assert.body(() => typia.assert(props.body));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Delete an admin activity log by ID (virtual_account_admin_activity_logs
 * table).
 *
 * This operation removes/disables an admin activity log record by its UUID.
 * Usually used for legal redaction, right-to-be-forgotten, or strict policy
 * cleanups. Only allowed by super admin or with specialized audit privileges
 * per RBAC. Deletion is tracked in a separate redaction log for compliance.
 *
 * Checks that the record exists and can be deleted under policy. Returns
 * deleted record or confirmation. Errors on not found, RBAC denial, or business
 * policy violations.
 *
 * Paired with POST/PUT/GET/PATCH for log record lifecycle handling.
 *
 * @param props.id Target admin activity log record ID (UUID)
 * @path /virtualAccount/adminActivityLogs/:id
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export async function eraseById(
  connection: IConnection,
  props: eraseById.Props,
): Promise<eraseById.Response> {
  return !!connection.simulate
    ? eraseById.simulate(connection, props)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseById.METADATA,
          path: eraseById.path(props),
          status: null,
        },
      );
}
export namespace eraseById {
  export type Props = {
    /** Target admin activity log record ID (UUID) */
    id: string & tags.Format<"uuid">;
  };
  export type Response = virtual_account_admin_activity_logs;

  export const METADATA = {
    method: "DELETE",
    path: "/virtualAccount/adminActivityLogs/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (props: Props) =>
    `/virtualAccount/adminActivityLogs/${encodeURIComponent(props.id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): virtual_account_admin_activity_logs =>
    typia.random<virtual_account_admin_activity_logs>(g);
  export const simulate = (
    connection: IConnection,
    props: eraseById.Props,
  ): Response => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseById.path(props),
      contentType: "application/json",
    });
    try {
      assert.param("id")(() => typia.assert(props.id));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
