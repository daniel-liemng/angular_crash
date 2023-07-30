import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidateFormComponent } from './custom-validate-form.component';

describe('CustomValidateFormComponent', () => {
  let component: CustomValidateFormComponent;
  let fixture: ComponentFixture<CustomValidateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomValidateFormComponent]
    });
    fixture = TestBed.createComponent(CustomValidateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
