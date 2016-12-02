import {Injectable} from '@angular/core';
@Injectable()
export class FileOperationRecord {

  private _documentId: String;
  private _metadata: String;

  constructor(documentId: String, metaData: String) {
    this._documentId = documentId;
    this._metadata = metaData;

  }

  getDocumentId(): String {
    return this._documentId;
  }

  getMetaData(): String {
    return this._metadata;
  }
}
