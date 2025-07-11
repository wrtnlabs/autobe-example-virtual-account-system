import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia, { tags } from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IVirtualAccountNotificationTemplate } from "../../../structures/IVirtualAccountNotificationTemplate";
import { IPageIVirtualAccountNotificationTemplate } from "../../../structures/IPageIVirtualAccountNotificationTemplate";

/**
 * Create a notification template (virtual_account_notification_templates).
 *
 * This API operation creates a new notification template in the
 * 'virtual_account_notification_templates' table, supporting requirements for
 * 관리되는 다국어/다채널 알림 템플릿 추가. Templates define format, channel (e.g.,
 * kakao/email/sms), subject, body (with variables), language, and active status
 * for use in virtual_account_notifications and downstream event logic.
 *
 * Security: Only admin users with permission to manage notification templates
 * can use this operation. Traceability and audit are enforced by logging every
 * change through admin activity logs. Validation includes uniqueness for
 * template_code/channel_type/language/version and required atomic fields.
 *
 * Uses: Allows system to flexibly add new types of event-driven notifications.
 * Error responses for duplicate keys or malformed requests are defined. Related
 * APIs: modify or delete template, event notification creation that references
 * templates.
 *
 * @param props.body Creation info of the notification template.
 * @path /virtualAccount/notificationTemplates
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
    /** Creation info of the notification template. */
    body: IVirtualAccountNotificationTemplate.ICreate;
  };
  export type Body = IVirtualAccountNotificationTemplate.ICreate;
  export type Response = IVirtualAccountNotificationTemplate;

  export const METADATA = {
    method: "POST",
    path: "/virtualAccount/notificationTemplates",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/virtualAccount/notificationTemplates";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IVirtualAccountNotificationTemplate =>
    typia.random<IVirtualAccountNotificationTemplate>(g);
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
 * List/search notification templates (virtual_account_notification_templates)
 * with advanced filtering for admin UI.
 *
 * Lists and searches notification templates from
 * 'virtual_account_notification_templates', with support for advanced filtering
 * by template code, channel type, title, is_active, language, and version. Used
 * by admins in the notification configuration/management panel.
 *
 * Supports advanced search (by code/name), filtering, paging, and sorting for
 * scalable admin UX. Access must be RBAC-controlled to restrict who can manage
 * or preview template configurations (typically admins or system integrators).
 * Results may be joined with notification event/channel APIs for contextual
 * admin dashboard screens. Query validation and performance safeguards (limits,
 * allowed sorts) are strongly advised.
 *
 * @param props.body Template search criteria, pagination options, and filtering
 *   parameters.
 * @path /virtualAccount/notificationTemplates
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
    /**
     * Template search criteria, pagination options, and filtering
     * parameters.
     */
    body: IVirtualAccountNotificationTemplate.IRequest;
  };
  export type Body = IVirtualAccountNotificationTemplate.IRequest;
  export type Response = IPageIVirtualAccountNotificationTemplate;

  export const METADATA = {
    method: "PATCH",
    path: "/virtualAccount/notificationTemplates",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/virtualAccount/notificationTemplates";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPageIVirtualAccountNotificationTemplate =>
    typia.random<IPageIVirtualAccountNotificationTemplate>(g);
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
 * Retrieve a notification template record
 * (virtual_account_notification_templates) by ID for admin or system
 * preview/audit.
 *
 * Retrieves a notification template object from
 * 'virtual_account_notification_templates' by its unique identifier (UUID
 * primary key). Includes all data needed for preview or edit: template_code,
 * channel_type, title, body_format, body_template, language_code, version,
 * is_active, plus relevant relational references. Supports admin workflows for
 * notification management, version audit, and cross-reference with past
 * notification events.
 *
 * RBAC ensures only authorized admins/super-admins have access to view/modify
 * template content. Returns 404 if template not found, or 403 if forbidden. May
 * be referenced by GET/list endpoints for templates or notification integration
 * panels.
 *
 * @param props.id Target notification template UUID to retrieve.
 * @path /virtualAccount/notificationTemplates/:id
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
    /** Target notification template UUID to retrieve. */
    id: string & tags.Format<"uuid">;
  };
  export type Response = IVirtualAccountNotificationTemplate;

  export const METADATA = {
    method: "GET",
    path: "/virtualAccount/notificationTemplates/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (props: Props) =>
    `/virtualAccount/notificationTemplates/${encodeURIComponent(props.id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IVirtualAccountNotificationTemplate =>
    typia.random<IVirtualAccountNotificationTemplate>(g);
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
 * Update a notification template (virtual_account_notification_templates).
 *
 * This API operation updates an existing notification template by the specified
 * unique ID. It references the 'virtual_account_notification_templates' table
 * and changes properties such as title, notification channel, template body,
 * language, or version based on admin input.
 *
 * Security/Permissions: Only authorized admins may modify templates, and every
 * modification must be audited in admin activity logs for compliance.
 * Validation: The operation must check that the new values do not duplicate an
 * existing template on unique constraints (e.g.,
 * template_code/channel_type/language/version). Any update triggers an
 * updated_at timestamp for the template record.
 *
 * Related APIs: template creation, deletion, notification event creation using
 * updated template.
 *
 * @param props.id Target notification template's ID.
 * @param props.body Update information for the notification template.
 * @path /virtualAccount/notificationTemplates/:id
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
    /** Target notification template's ID. */
    id: string & tags.Format<"uuid">;

    /** Update information for the notification template. */
    body: IVirtualAccountNotificationTemplate.IUpdate;
  };
  export type Body = IVirtualAccountNotificationTemplate.IUpdate;
  export type Response = IVirtualAccountNotificationTemplate;

  export const METADATA = {
    method: "PUT",
    path: "/virtualAccount/notificationTemplates/:id",
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
    `/virtualAccount/notificationTemplates/${encodeURIComponent(props.id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IVirtualAccountNotificationTemplate =>
    typia.random<IVirtualAccountNotificationTemplate>(g);
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
 * Delete a notification template (virtual_account_notification_templates).
 *
 * This API operation deletes a notification template identified by its unique
 * ID from the 'virtual_account_notification_templates' table. Before deletion,
 * checks are performed to ensure the template is not referenced by any
 * active/pending notification events, upholding referential integrity and
 * preventing accidental loss of critical templates.
 *
 * Security/Permissions: Only admins with sufficient authority may perform
 * deletion, and all deletions are logged via admin activity logs. Validation:
 * Attempts to delete in-use templates result in an error; otherwise, the record
 * is (soft) deleted and not available for new notifications.
 *
 * Related APIs: listing templates, creating new templates, updating and
 * auditing template usage.
 *
 * @param props.id Target notification template's ID.
 * @path /virtualAccount/notificationTemplates/:id
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
    /** Target notification template's ID. */
    id: string & tags.Format<"uuid">;
  };
  export type Response = IVirtualAccountNotificationTemplate;

  export const METADATA = {
    method: "DELETE",
    path: "/virtualAccount/notificationTemplates/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (props: Props) =>
    `/virtualAccount/notificationTemplates/${encodeURIComponent(props.id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IVirtualAccountNotificationTemplate =>
    typia.random<IVirtualAccountNotificationTemplate>(g);
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
