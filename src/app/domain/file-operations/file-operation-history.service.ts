import {Injectable} from '@angular/core';
import {FileOperationRecord} from './file-operation-record';

@Injectable()
export class FileOperationHistoryService {

private files: FileOperationRecord[] = [];

  constructor() {
  }

  addRecord(docId: String, metad: String) {

    let addone: FileOperationRecord = new FileOperationRecord(docId, metad);
    this.files.push(addone);

  }

  getRecordbyDocID(docId): FileOperationRecord {

    for (let record  of this.files) {
      if (record.getDocumentId() === docId) {
        return record;
      }

    }
    return null;
  }

}
