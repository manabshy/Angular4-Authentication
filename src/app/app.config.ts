
import {Injectable} from '@angular/core';

@Injectable()
export class AppConfigs {

    constructor() { }

    private useMockData: boolean = true;
    private root: string = (this.useMockData) ? 'http://localhost:8090' : 'http://172.19.32.126:8080';

    // upload url 
    public uploadUri: string  = this.root + '/ingestion-service-web/igs/document/upload';

    // file upload end point 
    public updateUri: string    =  this.root + '/ingestion-service-web/igs/document/update/';

}

