export class MetaDataModel {
  constructor(
    public customerId: string,
    public sourceSystem: string,
    public contentType: string,
    public receivedDate: Date,
    public uploadDate: Date) { }
    public utr: string;
};


export class MetaDataResponseModel extends MetaDataModel {
  responseCode: string;
  totalExecutionTime: string;
  DocId: string;
  constructor(private _metaData: MetaDataModel){ super(_metaData.customerId, _metaData.sourceSystem, _metaData.contentType, _metaData.receivedDate, _metaData.uploadDate)}
}
