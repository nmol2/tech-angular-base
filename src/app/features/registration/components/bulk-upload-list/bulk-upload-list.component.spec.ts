import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadListComponent } from './bulk-upload-list.component';

describe('BulkUploadListComponent', () => {
  let component: BulkUploadListComponent;
  let fixture: ComponentFixture<BulkUploadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkUploadListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkUploadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
