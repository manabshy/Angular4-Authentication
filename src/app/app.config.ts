
import {Injectable} from '@angular/core';

@Injectable()
export class AppConfigs {

	constructor() { }

	//upload url 
	public upload_uri:string  = 'http://localhost:8090/ingestion-service-web/igs/document/upload';

	//file upload end point 
	public update_uri:string = 'http://localhost:8090/ingestion-service-web/igs/document/update/';

}