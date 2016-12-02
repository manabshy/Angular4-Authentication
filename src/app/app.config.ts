
import {Injectable} from '@angular/core';

@Injectable()
export class AppConfigs {

	constructor() { }

	private useMockData:boolean = false;
	private mockUrl: string = "http://localhost:8090";

	//upload url 
	public uploadUri:string  = ((this.useMockData) ? this.mockUrl : "http://172.19.32.45:8080") + '/ingestion-service-web/igs/document/upload';

	//file upload end point 
	public updateUri:string =  ((this.useMockData) ? this.mockUrl : "http://172.19.32.73:8081") + '/ingestion-service-web/igs/document/update';


}