"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.379.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestFunction = exports.toPathString = exports.serializeDataIfNeeded = exports.setSearchParams = exports.setOAuthToObject = exports.setBearerAuthToObject = exports.setBasicAuthToObject = exports.setApiKeyToObject = exports.assertParamExists = exports.DUMMY_BASE_URL = void 0;
const base_1 = require("./base");
/**
 *
 * @export
 */
exports.DUMMY_BASE_URL = 'https://example.com';
/**
 *
 * @throws {RequiredError}
 * @export
 */
const assertParamExists = function (functionName, paramName, paramValue) {
    if (paramValue === null || paramValue === undefined) {
        throw new base_1.RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
};
exports.assertParamExists = assertParamExists;
/**
 *
 * @export
 */
const setApiKeyToObject = function (object, keyParamName, configuration) {
    return __awaiter(this, void 0, void 0, function* () {
        if (configuration && configuration.apiKey) {
            const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                ? yield configuration.apiKey(keyParamName)
                : yield configuration.apiKey;
            object[keyParamName] = localVarApiKeyValue;
        }
    });
};
exports.setApiKeyToObject = setApiKeyToObject;
/**
 *
 * @export
 */
const setBasicAuthToObject = function (object, configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = { username: configuration.username, password: configuration.password };
    }
};
exports.setBasicAuthToObject = setBasicAuthToObject;
/**
 *
 * @export
 */
const setBearerAuthToObject = function (object, configuration) {
    return __awaiter(this, void 0, void 0, function* () {
        if (configuration && configuration.accessToken) {
            const accessToken = typeof configuration.accessToken === 'function'
                ? yield configuration.accessToken()
                : yield configuration.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
        }
    });
};
exports.setBearerAuthToObject = setBearerAuthToObject;
/**
 *
 * @export
 */
const setOAuthToObject = function (object, name, scopes, configuration) {
    return __awaiter(this, void 0, void 0, function* () {
        if (configuration && configuration.accessToken) {
            const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                ? yield configuration.accessToken(name, scopes)
                : yield configuration.accessToken;
            object["Authorization"] = "Bearer " + localVarAccessTokenValue;
        }
    });
};
exports.setOAuthToObject = setOAuthToObject;
/**
 *
 * @export
 */
const setSearchParams = function (url, ...objects) {
    const searchParams = new URLSearchParams(url.search);
    for (const object of objects) {
        for (const key in object) {
            if (Array.isArray(object[key])) {
                searchParams.delete(key);
                for (const item of object[key]) {
                    searchParams.append(key, item);
                }
            }
            else {
                searchParams.set(key, object[key]);
            }
        }
    }
    url.search = searchParams.toString();
};
exports.setSearchParams = setSearchParams;
/**
 *
 * @export
 */
const serializeDataIfNeeded = function (value, requestOptions, configuration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
};
exports.serializeDataIfNeeded = serializeDataIfNeeded;
/**
 *
 * @export
 */
const toPathString = function (url) {
    return url.pathname + url.search + url.hash;
};
exports.toPathString = toPathString;
/**
 *
 * @export
 */
const createRequestFunction = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
    return (axios = globalAxios, basePath = BASE_PATH) => {
        const axiosRequestArgs = Object.assign(Object.assign({}, axiosArgs.options), { url: ((configuration === null || configuration === void 0 ? void 0 : configuration.basePath) || basePath) + axiosArgs.url });
        return axios.request(axiosRequestArgs);
    };
};
exports.createRequestFunction = createRequestFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCOzs7Ozs7Ozs7O0dBVUc7Ozs7Ozs7Ozs7OztBQUlILGlDQUFvRDtBQUdwRDs7O0dBR0c7QUFDVSxRQUFBLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQTtBQUVuRDs7OztHQUlHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxVQUFVLFlBQW9CLEVBQUUsU0FBaUIsRUFBRSxVQUFtQjtJQUNuRyxJQUFJLFVBQVUsS0FBSyxJQUFJLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtRQUNqRCxNQUFNLElBQUksb0JBQWEsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLFNBQVMsdUNBQXVDLFlBQVksR0FBRyxDQUFDLENBQUM7S0FDN0g7QUFDTCxDQUFDLENBQUE7QUFKWSxRQUFBLGlCQUFpQixxQkFJN0I7QUFFRDs7O0dBR0c7QUFDSSxNQUFNLGlCQUFpQixHQUFHLFVBQWdCLE1BQVcsRUFBRSxZQUFvQixFQUFFLGFBQTZCOztRQUM3RyxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxhQUFhLENBQUMsTUFBTSxLQUFLLFVBQVU7Z0JBQ2xFLENBQUMsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUMxQyxDQUFDLENBQUMsTUFBTSxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztTQUM5QztJQUNMLENBQUM7Q0FBQSxDQUFBO0FBUFksUUFBQSxpQkFBaUIscUJBTzdCO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxvQkFBb0IsR0FBRyxVQUFVLE1BQVcsRUFBRSxhQUE2QjtJQUNwRixJQUFJLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLElB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QUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFBO0FBUlksUUFBQSxxQkFBcUIseUJBUWpDO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxZQUFZLEdBQUcsVUFBVSxHQUFRO0lBQzFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7QUFDL0MsQ0FBQyxDQUFBO0FBRlksUUFBQSxZQUFZLGdCQUV4QjtBQUVEOzs7R0FHRztBQUNJLE1BQU0scUJBQXFCLEdBQUcsVUFBVSxTQUFzQixFQUFFLFdBQTBCLEVBQUUsU0FBaUIsRUFBRSxhQUE2QjtJQUMvSSxPQUFPLENBQUMsUUFBdUIsV0FBVyxFQUFFLFdBQW1CLFNBQVMsRUFBRSxFQUFFO1FBQ3hFLE1BQU0sZ0JBQWdCLG1DQUFPLFNBQVMsQ0FBQyxPQUFPLEtBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsUUFBUSxLQUFJLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUMsQ0FBQztRQUM1RyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUE7QUFMWSxRQUFBLHFCQUFxQix5QkFLakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVGhlIFBsYWlkIEFQSVxuICogVGhlIFBsYWlkIFJFU1QgQVBJLiBQbGVhc2Ugc2VlIGh0dHBzOi8vcGxhaWQuY29tL2RvY3MvYXBpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDIwMjAtMDktMTRfMS4zNzkuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJlcXVpcmVkRXJyb3Is44CAUmVxdWVzdEFyZ3MgfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBEVU1NWV9CQVNFX1VSTCA9ICdodHRwczovL2V4YW1wbGUuY29tJ1xuXG4vKipcbiAqXG4gKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgYXNzZXJ0UGFyYW1FeGlzdHMgPSBmdW5jdGlvbiAoZnVuY3Rpb25OYW1lOiBzdHJpbmcsIHBhcmFtTmFtZTogc3RyaW5nLCBwYXJhbVZhbHVlOiB1bmtub3duKSB7XG4gICAgaWYgKHBhcmFtVmFsdWUgPT09IG51bGwgfHwgcGFyYW1WYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKHBhcmFtTmFtZSwgYFJlcXVpcmVkIHBhcmFtZXRlciAke3BhcmFtTmFtZX0gd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyAke2Z1bmN0aW9uTmFtZX0uYCk7XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRBcGlLZXlUb09iamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChvYmplY3Q6IGFueSwga2V5UGFyYW1OYW1lOiBzdHJpbmcsIGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBhd2FpdCBjb25maWd1cmF0aW9uLmFwaUtleShrZXlQYXJhbU5hbWUpXG4gICAgICAgICAgICA6IGF3YWl0IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICBvYmplY3Rba2V5UGFyYW1OYW1lXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRCYXNpY0F1dGhUb09iamVjdCA9IGZ1bmN0aW9uIChvYmplY3Q6IGFueSwgY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICBpZiAoY29uZmlndXJhdGlvbiAmJiAoY29uZmlndXJhdGlvbi51c2VybmFtZSB8fCBjb25maWd1cmF0aW9uLnBhc3N3b3JkKSkge1xuICAgICAgICBvYmplY3RbXCJhdXRoXCJdID0geyB1c2VybmFtZTogY29uZmlndXJhdGlvbi51c2VybmFtZSwgcGFzc3dvcmQ6IGNvbmZpZ3VyYXRpb24ucGFzc3dvcmQgfTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEJlYXJlckF1dGhUb09iamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChvYmplY3Q6IGFueSwgY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW4gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gYXdhaXQgY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbigpXG4gICAgICAgICAgICA6IGF3YWl0IGNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW47XG4gICAgICAgIG9iamVjdFtcIkF1dGhvcml6YXRpb25cIl0gPSBcIkJlYXJlciBcIiArIGFjY2Vzc1Rva2VuO1xuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3Qgc2V0T0F1dGhUb09iamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChvYmplY3Q6IGFueSwgbmFtZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdLCBjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgY29uc3QgbG9jYWxWYXJBY2Nlc3NUb2tlblZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW4gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gYXdhaXQgY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbihuYW1lLCBzY29wZXMpXG4gICAgICAgICAgICA6IGF3YWl0IGNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW47XG4gICAgICAgIG9iamVjdFtcIkF1dGhvcml6YXRpb25cIl0gPSBcIkJlYXJlciBcIiArIGxvY2FsVmFyQWNjZXNzVG9rZW5WYWx1ZTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFNlYXJjaFBhcmFtcyA9IGZ1bmN0aW9uICh1cmw6IFVSTCwgLi4ub2JqZWN0czogYW55W10pIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zZWFyY2gpO1xuICAgIGZvciAoY29uc3Qgb2JqZWN0IG9mIG9iamVjdHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3Rba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9iamVjdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5zZXQoa2V5LCBvYmplY3Rba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsLnNlYXJjaCA9IHNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xufVxuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVEYXRhSWZOZWVkZWQgPSBmdW5jdGlvbiAodmFsdWU6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCBub25TdHJpbmcgPSB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnO1xuICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9IG5vblN0cmluZyAmJiBjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uaXNKc29uTWltZVxuICAgICAgICA/IGNvbmZpZ3VyYXRpb24uaXNKc29uTWltZShyZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSlcbiAgICAgICAgOiBub25TdHJpbmc7XG4gICAgcmV0dXJuIG5lZWRzU2VyaWFsaXphdGlvblxuICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KVxuICAgICAgICA6ICh2YWx1ZSB8fCBcIlwiKTtcbn1cblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgdG9QYXRoU3RyaW5nID0gZnVuY3Rpb24gKHVybDogVVJMKSB7XG4gICAgcmV0dXJuIHVybC5wYXRobmFtZSArIHVybC5zZWFyY2ggKyB1cmwuaGFzaFxufVxuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXF1ZXN0RnVuY3Rpb24gPSBmdW5jdGlvbiAoYXhpb3NBcmdzOiBSZXF1ZXN0QXJncywgZ2xvYmFsQXhpb3M6IEF4aW9zSW5zdGFuY2UsIEJBU0VfUEFUSDogc3RyaW5nLCBjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmF4aW9zQXJncy5vcHRpb25zLCB1cmw6IChjb25maWd1cmF0aW9uPy5iYXNlUGF0aCB8fCBiYXNlUGF0aCkgKyBheGlvc0FyZ3MudXJsfTtcbiAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgfTtcbn1cbiJdfQ==