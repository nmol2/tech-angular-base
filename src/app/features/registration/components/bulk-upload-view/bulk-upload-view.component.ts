import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { BulkUploadRestService } from '../../services/bulk-upload-rest/bulk-upload-rest.service';

@Component({
  selector: 'nm-bulk-upload-view',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
  ],
  templateUrl: './bulk-upload-view.component.html',
  styleUrl: './bulk-upload-view.component.css'
})
export class BulkUploadViewComponent {

  constructor(
    private bulkUploadRestService: BulkUploadRestService,
  ){

  }

  @Input() value!: any; // upload
 
  registrations: any;

  _fetchUploadRecords(upload: any){
    this.bulkUploadRestService.getRecordsByUpload(upload).subscribe({
      next: ()=>{

      }
    });
  }

  _modifyRecords(upload: any, records: any){
    this.bulkUploadRestService.modifyRecords(upload, records).subscribe({
      next: ()=>{

      }
    });
  }

  _finalizeRecords(upload: any, records: any){
    this.bulkUploadRestService.finalizeRecords(upload, records).subscribe({
      next: ()=>{

      }
    });
  }



}
