import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHtmlCopyCodeComponent } from './form-html-copy-code.component';

describe('FormHtmlCopyCodeComponent', () => {
  let component: FormHtmlCopyCodeComponent;
  let fixture: ComponentFixture<FormHtmlCopyCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHtmlCopyCodeComponent]
    });
    fixture = TestBed.createComponent(FormHtmlCopyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
