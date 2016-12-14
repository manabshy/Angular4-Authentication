import {Injectable} from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpClient {

    constructor() { }

    getHeaders() {
        let headers = new Headers();
        headers.append('Authorization', 'Basic am9lOmJsb2dnc3B3ZA==');
        // headers.append('Content-Type', 'application/json');
        return new RequestOptions({ headers: headers });
    }

}
