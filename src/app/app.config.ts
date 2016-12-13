
import {Injectable} from '@angular/core';

@Injectable()
export class AppConfigs {

	constructor() { }

	private useMockData:boolean = true;
	private mockUrl: string = "http://localhost:8090";

	//upload url
	public uploadUri:string  = ((this.useMockData) ? this.mockUrl : "http://172.19.32.126:8080") + '/ingestion-service-web/igs/document/upload';

	//file upload end point
	public updateUri:string =  ((this.useMockData) ? this.mockUrl : "http://172.19.32.126:8081") + '/ingestion-service-web/igs/document/update';


}
