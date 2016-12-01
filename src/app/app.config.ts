
import {Injectable} from '@angular/core';

@Injectable()
export class AppConfigs {

	constructor() { }

	//upload url 
	public uploadUri:string  = 'http://172.19.32.45:8080/ingestion-service-web/igs/document/upload/';

	//file upload end point 
	public updateUri:string = 'http://172.19.32.73:8081/ingestion-service-web/igs/document/update/';

}