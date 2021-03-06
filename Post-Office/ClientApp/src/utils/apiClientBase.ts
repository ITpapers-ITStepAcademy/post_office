/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.10.9.0 (NJsonSchema v10.4.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import authService from '../components/api-authorization/AuthorizeService'
export class ApiClientBase {
    //
    baseApiUrl: string = 'https://localhost:44310/';

    protected async transformsOptions(options: RequestInit): Promise<RequestInit> {
        const token = await authService.getAccessToken();
        options.headers = { ...options.headers, authorization: `Bearer ${token}` };
        return Promise.resolve(options);
    }

    protected transformResult(url: string, response: Response, processor: (response: Response) => any) {
        return processor(response);
    }

    protected getBaseUrl() {
        return this.baseApiUrl;
    }
}

export class OidcConfigurationClient extends ApiClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : <any>window;
        this.baseUrl = this.getBaseUrl("https://localhost:44331", baseUrl);
    }

    getClientRequestParameters(clientId: string | null): Promise<FileResponse> {
        let url_ = this.baseUrl + "/_configuration/{clientId}";
        if (clientId === undefined || clientId === null)
            throw new Error("The parameter 'clientId' must be defined.");
        url_ = url_.replace("{clientId}", encodeURIComponent("" + clientId));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.transformResult(url_, _response, (_response: Response) => this.processGetClientRequestParameters(_response));
        });
    }

    protected processGetClientRequestParameters(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(<any>null);
    }
}

export class PackagesClient extends ApiClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : <any>window;
        this.baseUrl = this.getBaseUrl("https://localhost:44331", baseUrl);
    }

    get(): Promise<PackageVm[]> {
        let url_ = this.baseUrl + "/api/Packages";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.transformResult(url_, _response, (_response: Response) => this.processGet(_response));
        });
    }

    protected processGet(response: Response): Promise<PackageVm[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(PackageVm.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PackageVm[]>(<any>null);
    }

    create(command: CreatePackageCommand): Promise<number> {
        let url_ = this.baseUrl + "/api/Packages";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.transformResult(url_, _response, (_response: Response) => this.processCreate(_response));
        });
    }

    protected processCreate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(<any>null);
    }
}

export class WeatherForecastClient extends ApiClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : <any>window;
        this.baseUrl = this.getBaseUrl("https://localhost:44331", baseUrl);
    }

    get(): Promise<WeatherForecast[]> {
        let url_ = this.baseUrl + "/WeatherForecast";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.transformResult(url_, _response, (_response: Response) => this.processGet(_response));
        });
    }

    protected processGet(response: Response): Promise<WeatherForecast[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(WeatherForecast.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<WeatherForecast[]>(<any>null);
    }
}

export class PackageVm implements IPackageVm {
    id?: number;
    packageNumber?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
    departureDate?: Date;
    paymentMethod?: PaymentMethod;
    dueDate?: Date | undefined;
    discount?: number;
    tax?: number;
    contents?: ContentVm[] | undefined;

    constructor(data?: IPackageVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.packageNumber = _data["packageNumber"];
            this.from = _data["from"];
            this.to = _data["to"];
            this.departureDate = _data["departureDate"] ? new Date(_data["departureDate"].toString()) : <any>undefined;
            this.paymentMethod = _data["paymentMethod"];
            this.dueDate = _data["dueDate"] ? new Date(_data["dueDate"].toString()) : <any>undefined;
            this.discount = _data["discount"];
            this.tax = _data["tax"];
            if (Array.isArray(_data["contents"])) {
                this.contents = [] as any;
                for (let item of _data["contents"])
                    this.contents!.push(ContentVm.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PackageVm {
        data = typeof data === 'object' ? data : {};
        let result = new PackageVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["packageNumber"] = this.packageNumber;
        data["from"] = this.from;
        data["to"] = this.to;
        data["departureDate"] = this.departureDate ? this.departureDate.toISOString() : <any>undefined;
        data["paymentMethod"] = this.paymentMethod;
        data["dueDate"] = this.dueDate ? this.dueDate.toISOString() : <any>undefined;
        data["discount"] = this.discount;
        data["tax"] = this.tax;
        if (Array.isArray(this.contents)) {
            data["contents"] = [];
            for (let item of this.contents)
                data["contents"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPackageVm {
    id?: number;
    packageNumber?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
    departureDate?: Date;
    paymentMethod?: PaymentMethod;
    dueDate?: Date | undefined;
    discount?: number;
    tax?: number;
    contents?: ContentVm[] | undefined;
}

export enum PaymentMethod {
    Cash = 0,
    CashOnDelivery = 1,
    Card = 2,
    CardOnDelivery = 3,
}

export class ContentVm implements IContentVm {
    id?: number;
    itemName?: string | undefined;
    quantity?: number;
    pricePerOne?: number;
    amount?: number;

    constructor(data?: IContentVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.itemName = _data["itemName"];
            this.quantity = _data["quantity"];
            this.pricePerOne = _data["pricePerOne"];
            this.amount = _data["amount"];
        }
    }

    static fromJS(data: any): ContentVm {
        data = typeof data === 'object' ? data : {};
        let result = new ContentVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["itemName"] = this.itemName;
        data["quantity"] = this.quantity;
        data["pricePerOne"] = this.pricePerOne;
        data["amount"] = this.amount;
        return data; 
    }
}

export interface IContentVm {
    id?: number;
    itemName?: string | undefined;
    quantity?: number;
    pricePerOne?: number;
    amount?: number;
}

export class CreatePackageCommand implements ICreatePackageCommand {
    id?: number;
    packageNumber?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
    departureDate?: Date;
    paymentMethod?: PaymentMethod;
    dueDate?: Date | undefined;
    discount?: number;
    tax?: number;
    contents?: ContentVm[] | undefined;

    constructor(data?: ICreatePackageCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.packageNumber = _data["packageNumber"];
            this.from = _data["from"];
            this.to = _data["to"];
            this.departureDate = _data["departureDate"] ? new Date(_data["departureDate"].toString()) : <any>undefined;
            this.paymentMethod = _data["paymentMethod"];
            this.dueDate = _data["dueDate"] ? new Date(_data["dueDate"].toString()) : <any>undefined;
            this.discount = _data["discount"];
            this.tax = _data["tax"];
            if (Array.isArray(_data["contents"])) {
                this.contents = [] as any;
                for (let item of _data["contents"])
                    this.contents!.push(ContentVm.fromJS(item));
            }
        }
    }

    static fromJS(data: any): CreatePackageCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreatePackageCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["packageNumber"] = this.packageNumber;
        data["from"] = this.from;
        data["to"] = this.to;
        data["departureDate"] = this.departureDate ? this.departureDate.toISOString() : <any>undefined;
        data["paymentMethod"] = this.paymentMethod;
        data["dueDate"] = this.dueDate ? this.dueDate.toISOString() : <any>undefined;
        data["discount"] = this.discount;
        data["tax"] = this.tax;
        if (Array.isArray(this.contents)) {
            data["contents"] = [];
            for (let item of this.contents)
                data["contents"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ICreatePackageCommand {
    id?: number;
    packageNumber?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
    departureDate?: Date;
    paymentMethod?: PaymentMethod;
    dueDate?: Date | undefined;
    discount?: number;
    tax?: number;
    contents?: ContentVm[] | undefined;
}

export class WeatherForecast implements IWeatherForecast {
    date?: Date;
    temperatureC?: number;
    temperatureF?: number;
    summary?: string | undefined;

    constructor(data?: IWeatherForecast) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.date = _data["date"] ? new Date(_data["date"].toString()) : <any>undefined;
            this.temperatureC = _data["temperatureC"];
            this.temperatureF = _data["temperatureF"];
            this.summary = _data["summary"];
        }
    }

    static fromJS(data: any): WeatherForecast {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherForecast();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["date"] = this.date ? this.date.toISOString() : <any>undefined;
        data["temperatureC"] = this.temperatureC;
        data["temperatureF"] = this.temperatureF;
        data["summary"] = this.summary;
        return data; 
    }
}

export interface IWeatherForecast {
    date?: Date;
    temperatureC?: number;
    temperatureF?: number;
    summary?: string | undefined;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}