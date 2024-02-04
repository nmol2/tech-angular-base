import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IUplaod {
  id: number;
  uploadedOn: Date;
}

@Component({
  selector: 'nm-bulk-upload-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './bulk-upload-list.component.html',
  styleUrl: './bulk-upload-list.component.css'
})
export class BulkUploadListComponent implements OnChanges {
  uploads!: IUplaod[];
  @Input() refresh: boolean = false;
  @Output() onSelect = new EventEmitter<IUplaod>();


  ngOnChanges(changes: SimpleChanges): void {
    if(!this.uploads)
      this.uploads = [];
    if('refresh' in changes){
      this._fetchUplods();
    }
  }

  _fetchUplods(){
    this.uploads.push({
      id: this.uploads.length,
      uploadedOn: new Date()
    })
  }

  handleSelect(upload: IUplaod){
    this.onSelect.emit(upload);
  }

}
