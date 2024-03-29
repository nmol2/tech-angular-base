import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadPageComponent } from './bulk-upload-page.component';

describe('BulkUploadPageComponent', () => {
  let component: BulkUploadPageComponent;
  let fixture: ComponentFixture<BulkUploadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkUploadPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
