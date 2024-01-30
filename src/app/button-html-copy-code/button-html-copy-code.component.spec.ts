import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHtmlCopyCodeComponent } from './button-html-copy-code.component';

describe('ButtonHtmlCopyCodeComponent', () => {
  let component: ButtonHtmlCopyCodeComponent;
  let fixture: ComponentFixture<ButtonHtmlCopyCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonHtmlCopyCodeComponent]
    });
    fixture = TestBed.createComponent(ButtonHtmlCopyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
