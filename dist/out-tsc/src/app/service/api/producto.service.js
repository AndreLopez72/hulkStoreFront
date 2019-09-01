import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions } from '@angular/http';
import '../rxjs-operators';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
let ProductoService = class ProductoService {
    constructor(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://localhost:8080/productostore-back/api';
        this.defaultHeaders = new Headers();
        this.configuration = new Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    extendObj(objA, objB) {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns the number of productos
     *
     */
    countProductos(extraHttpRequestParams) {
        return this.countProductosWithHttpInfo(extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    }
    createProducto(body, extraHttpRequestParams) {
        return this.createProductoWithHttpInfo(body, extraHttpRequestParams)
            .map((response) => {
            switch (response.status) {
                case 204:
                    return undefined;
                case 201:
                    return response;
                default:
                    return response.json();
            }
        });
    }
    deleteProducto(id, extraHttpRequestParams) {
        return this.deleteProductoWithHttpInfo(id, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    }
    getProducto(id, extraHttpRequestParams) {
        return this.getProductoWithHttpInfo(id, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    }
    getProductos(extraHttpRequestParams) {
        return this.getProductosWithHttpInfo(extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    }
    countProductosWithHttpInfo(extraHttpRequestParams) {
        const path = this.basePath + '/productos/count';
        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        let produces = [
            'text/plain'
        ];
        let requestOptions = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    createProductoWithHttpInfo(body, extraHttpRequestParams) {
        const path = this.basePath + '/productos';
        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createProducto.');
        }
        // to determine the Accept header
        let produces = [];
        headers.set('Content-Type', 'application/json');
        let requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    deleteProductoWithHttpInfo(id, extraHttpRequestParams) {
        const path = this.basePath + '/productos/${id}'
            .replace('${' + 'id' + '}', String(id));
        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteProducto.');
        }
        // to determine the Accept header
        let produces = [];
        let requestOptions = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * Returns a producto given an id
     *
     * @param id
     */
    getProductoWithHttpInfo(id, extraHttpRequestParams) {
        const path = this.basePath + '/productos/${id}'
            .replace('${' + 'id' + '}', String(id));
        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProducto.');
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * Returns all the productos
     *
     */
    getProductosWithHttpInfo(extraHttpRequestParams) {
        const path = this.basePath + '/productos';
        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
};
ProductoService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional())
], ProductoService);
export { ProductoService };
//# sourceMappingURL=producto.service.js.map