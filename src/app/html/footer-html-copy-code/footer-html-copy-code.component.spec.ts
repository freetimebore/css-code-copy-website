import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHtmlCopyCodeComponent } from './footer-html-copy-code.component';

describe('FooterHtmlCopyCodeComponent', () => {
  let component: FooterHtmlCopyCodeComponent;
  let fixture: ComponentFixture<FooterHtmlCopyCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterHtmlCopyCodeComponent]
    });
    fixture = TestBed.createComponent(FooterHtmlCopyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
