/**
 * APIHandler is a class for executing REST API requests.
 *
 * @param {ApiEndPoint} endPoint - The API endpoint.
 * @param {HttpRequestMethod} method - The HTTP request method.
 * @param {object} [body] - The request body (for methods other than GET).
 * @param {OutgoingHttpHeaders} [headers] - The request headers.
 * @param {RequestCache} [cache] - The cache mode.
 * @returns {Promise<object>} The response data.
 *
 * @example
 * const data = await APIHandler.execute({
 *   endPoint: "/users",
 *   method: "POST",
 *   body: { name: "John Doe" },
 *   headers: { "Content-Type": "application/json" },
 *   cache: "no-store",
 * });
 **/

import { ApiEndPoint } from "@/types/global";
import { tryCatch } from "./try-catch";
import { isResponseStatusOK } from "./utils";

type HttpRequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface BaseParams {
  endPoint: ApiEndPoint;
  cache?: RequestCache;
  headers?: HeadersInit;
}

type Params =
  | (BaseParams & { method: "GET"; body?: never })
  | (BaseParams & {
      method: Exclude<HttpRequestMethod, "GET">;
      body?: unknown;
    });

export class APIHandler {
  static async execute({
    endPoint,
    method,
    body,
    headers = {},
    cache = "force-cache",
  }: Params) {
    const defaultHeaders: HeadersInit = {
      "Content-Type": "application/json",
    };

    const mergedHeaders = { ...defaultHeaders, ...headers };

    const { response, error } = await tryCatch(
      fetch(endPoint, {
        method,
        headers: mergedHeaders,
        body: JSON.stringify(body),
        cache,
      }),
    );

    if (error) {
      console.error(error);

      return error;
    }

    if (!isResponseStatusOK(response)) {
      console.error(response);

      return new Error(`API request failed with status ${response?.status}`);
    }

    const result = await response?.json();

    return result;
  }
}
