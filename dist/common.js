"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.97.0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCOzs7Ozs7Ozs7O0dBVUc7Ozs7Ozs7Ozs7OztBQUlILGlDQUFvRDtBQUdwRDs7O0dBR0c7QUFDVSxRQUFBLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQTtBQUVuRDs7OztHQUlHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxVQUFVLFlBQW9CLEVBQUUsU0FBaUIsRUFBRSxVQUFtQjtJQUNuRyxJQUFJLFVBQVUsS0FBSyxJQUFJLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtRQUNqRCxNQUFNLElBQUksb0JBQWEsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLFNBQVMsdUNBQXVDLFlBQVksR0FBRyxDQUFDLENBQUM7S0FDN0g7QUFDTCxDQUFDLENBQUE7QUFKWSxRQUFBLGlCQUFpQixxQkFJN0I7QUFFRDs7O0dBR0c7QUFDSSxNQUFNLGlCQUFpQixHQUFHLFVBQWdCLE1BQVcsRUFBRSxZQUFvQixFQUFFLGFBQTZCOztRQUM3RyxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxhQUFhLENBQUMsTUFBTSxLQUFLLFVBQVU7Z0JBQ2xFLENBQUMsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUMxQyxDQUFDLENBQUMsTUFBTSxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztTQUM5QztJQUNMLENBQUM7Q0FBQSxDQUFBO0FBUFksUUFBQSxpQkFBaUIscUJBTzdCO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxvQkFBb0IsR0FBRyxVQUFVLE1BQVcsRUFBRSxhQUE2QjtJQUNwRixJQUFJLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLElB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QUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFBO0FBUlksUUFBQSxxQkFBcUIseUJBUWpDO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxZQUFZLEdBQUcsVUFBVSxHQUFRO0lBQzFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7QUFDL0MsQ0FBQyxDQUFBO0FBRlksUUFBQSxZQUFZLGdCQUV4QjtBQUVEOzs7R0FHRztBQUNJLE1BQU0scUJBQXFCLEdBQUcsVUFBVSxTQUFzQixFQUFFLFdBQTBCLEVBQUUsU0FBaUIsRUFBRSxhQUE2QjtJQUMvSSxPQUFPLENBQUMsUUFBdUIsV0FBVyxFQUFFLFdBQW1CLFNBQVMsRUFBRSxFQUFFO1FBQ3hFLE1BQU0sZ0JBQWdCLG1DQUFPLFNBQVMsQ0FBQyxPQUFPLEtBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsUUFBUSxLQUFJLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUMsQ0FBQztRQUM1RyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUE7QUFMWSxRQUFBLHFCQUFxQix5QkFLakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVGhlIFBsYWlkIEFQSVxuICogVGhlIFBsYWlkIFJFU1QgQVBJLiBQbGVhc2Ugc2VlIGh0dHBzOi8vcGxhaWQuY29tL2RvY3MvYXBpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDIwMjAtMDktMTRfMS45Ny4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUmVxdWlyZWRFcnJvcizjgIBSZXF1ZXN0QXJncyB9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5cbi8qKlxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IERVTU1ZX0JBU0VfVVJMID0gJ2h0dHBzOi8vZXhhbXBsZS5jb20nXG5cbi8qKlxuICpcbiAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBhc3NlcnRQYXJhbUV4aXN0cyA9IGZ1bmN0aW9uIChmdW5jdGlvbk5hbWU6IHN0cmluZywgcGFyYW1OYW1lOiBzdHJpbmcsIHBhcmFtVmFsdWU6IHVua25vd24pIHtcbiAgICBpZiAocGFyYW1WYWx1ZSA9PT0gbnVsbCB8fCBwYXJhbVZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IocGFyYW1OYW1lLCBgUmVxdWlyZWQgcGFyYW1ldGVyICR7cGFyYW1OYW1lfSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nICR7ZnVuY3Rpb25OYW1lfS5gKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEFwaUtleVRvT2JqZWN0ID0gYXN5bmMgZnVuY3Rpb24gKG9iamVjdDogYW55LCBrZXlQYXJhbU5hbWU6IHN0cmluZywgY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IGF3YWl0IGNvbmZpZ3VyYXRpb24uYXBpS2V5KGtleVBhcmFtTmFtZSlcbiAgICAgICAgICAgIDogYXdhaXQgY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgIG9iamVjdFtrZXlQYXJhbU5hbWVdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEJhc2ljQXV0aFRvT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdDogYW55LCBjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIGlmIChjb25maWd1cmF0aW9uICYmIChjb25maWd1cmF0aW9uLnVzZXJuYW1lIHx8IGNvbmZpZ3VyYXRpb24ucGFzc3dvcmQpKSB7XG4gICAgICAgIG9iamVjdFtcImF1dGhcIl0gPSB7IHVzZXJuYW1lOiBjb25maWd1cmF0aW9uLnVzZXJuYW1lLCBwYXNzd29yZDogY29uZmlndXJhdGlvbi5wYXNzd29yZCB9O1xuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3Qgc2V0QmVhcmVyQXV0aFRvT2JqZWN0ID0gYXN5bmMgZnVuY3Rpb24gKG9iamVjdDogYW55LCBjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBhd2FpdCBjb25maWd1cmF0aW9uLmFjY2Vzc1Rva2VuKClcbiAgICAgICAgICAgIDogYXdhaXQgY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbjtcbiAgICAgICAgb2JqZWN0W1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgYWNjZXNzVG9rZW47XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRPQXV0aFRvT2JqZWN0ID0gYXN5bmMgZnVuY3Rpb24gKG9iamVjdDogYW55LCBuYW1lOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10sIGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbikge1xuICAgICAgICBjb25zdCBsb2NhbFZhckFjY2Vzc1Rva2VuVmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBhd2FpdCBjb25maWd1cmF0aW9uLmFjY2Vzc1Rva2VuKG5hbWUsIHNjb3BlcylcbiAgICAgICAgICAgIDogYXdhaXQgY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbjtcbiAgICAgICAgb2JqZWN0W1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgbG9jYWxWYXJBY2Nlc3NUb2tlblZhbHVlO1xuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3Qgc2V0U2VhcmNoUGFyYW1zID0gZnVuY3Rpb24gKHVybDogVVJMLCAuLi5vYmplY3RzOiBhbnlbXSkge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsLnNlYXJjaCk7XG4gICAgZm9yIChjb25zdCBvYmplY3Qgb2Ygb2JqZWN0cykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb2JqZWN0W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLnNldChrZXksIG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmwuc2VhcmNoID0gc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZURhdGFJZk5lZWRlZCA9IGZ1bmN0aW9uICh2YWx1ZTogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIGNvbnN0IG5vblN0cmluZyA9IHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZyc7XG4gICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gbm9uU3RyaW5nICYmIGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5pc0pzb25NaW1lXG4gICAgICAgID8gY29uZmlndXJhdGlvbi5pc0pzb25NaW1lKHJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKVxuICAgICAgICA6IG5vblN0cmluZztcbiAgICByZXR1cm4gbmVlZHNTZXJpYWxpemF0aW9uXG4gICAgICAgID8gSlNPTi5zdHJpbmdpZnkodmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pXG4gICAgICAgIDogKHZhbHVlIHx8IFwiXCIpO1xufVxuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCB0b1BhdGhTdHJpbmcgPSBmdW5jdGlvbiAodXJsOiBVUkwpIHtcbiAgICByZXR1cm4gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaCArIHVybC5oYXNoXG59XG5cbi8qKlxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcXVlc3RGdW5jdGlvbiA9IGZ1bmN0aW9uIChheGlvc0FyZ3M6IFJlcXVlc3RBcmdzLCBnbG9iYWxBeGlvczogQXhpb3NJbnN0YW5jZSwgQkFTRV9QQVRIOiBzdHJpbmcsIGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4uYXhpb3NBcmdzLm9wdGlvbnMsIHVybDogKGNvbmZpZ3VyYXRpb24/LmJhc2VQYXRoIHx8IGJhc2VQYXRoKSArIGF4aW9zQXJncy51cmx9O1xuICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICB9O1xufVxuIl19