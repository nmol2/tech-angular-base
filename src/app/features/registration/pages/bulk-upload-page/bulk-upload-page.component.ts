import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkUploadListComponent } from '../../components/bulk-upload-list/bulk-upload-list.component';
import { BulkUploadViewComponent } from '../../components/bulk-upload-view/bulk-upload-view.component';
import { FileSelectorComponent } from '../../components/file-selector/file-selector.component';

@Component({
  selector: 'nm-bulk-upload-page',
  standalone: true,
  imports: [
    CommonModule,
    FileSelectorComponent,
    BulkUploadListComponent,
    BulkUploadViewComponent,
  ],
  templateUrl: './bulk-upload-page.component.html',
  styleUrl: './bulk-upload-page.component.css'
})
export class BulkUploadPageComponent {
  refresh:boolean = false;
  selectedUpload!: any;

  handleUploadSelect(e: any){
    this.selectedUpload = e;
  }

  handleUpload(e:any){
    this.refresh = !this.refresh;
  }

}
