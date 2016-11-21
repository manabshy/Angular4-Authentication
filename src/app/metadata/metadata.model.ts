export class MetaDataModel {
  constructor(
    public customerId: string,
    public sourceSystem: string,
    public contentType: string,
    public receivedDate: Date,
    public uploadDate: Date) { }
};
