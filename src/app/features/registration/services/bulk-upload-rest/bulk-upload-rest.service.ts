import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulkUploadRestService {

  constructor(
    private http: HttpClient,
  ) { }

  uploadRecords():Observable<any>{
    return this.http.get('');
  }

  getUplods():Observable<any>{
    return this.http.get('');
  }

  getRecordsByUpload(upload: any):Observable<any>{
    return this.http.get('');
  }

  modifyRecords(upload: any, records: any):Observable<any>{
    return this.http.get('');
  }

  finalizeRecords(upload: any, records: any):Observable<any>{
    return this.http.get('');
  }

}
