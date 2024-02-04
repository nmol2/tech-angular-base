import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadHandlerEvent, FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { read, utils } from 'xlsx';

@Component({
  selector: 'nm-file-selector',
  standalone: true,
  imports: [
    CommonModule,
    FileUploadModule,
    TableModule,
  ],
  templateUrl: './file-selector.component.html',
  styleUrl: './file-selector.component.css'
})
export class FileSelectorComponent {
  @Output() onUpload = new EventEmitter<any>();

  registrations: any;

  handleOnSuccessUpload(event: UploadEvent) {

  }

  handleUpload(event: FileUploadHandlerEvent){
    this.readXlsxFile(event.files, (rows)=>{
      this.registrations = rows;
      this.onUpload.emit();
    });
  }

  // Core - File - Xlsx
  readXlsxFile(files: any[], onload: (rows: any[])=>void){
    this.readFile(files.slice(0,1), (file)=>{
      const wb = read(file);
      const sheets = wb.SheetNames;

      if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          typeof onload === 'function' && onload(rows);
      }
    });
  }

  // Core - File
  readFile(files:any, onload: (file:any)=>void){
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        typeof onload === 'function' && onload(event.target.result);
      }
      reader.readAsArrayBuffer(file);
    }
  }

  uploadRecords(){

  }
}
