import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHtmlCopyCodeComponent } from './header-html-copy-code.component';

describe('HeaderHtmlCopyCodeComponent', () => {
  let component: HeaderHtmlCopyCodeComponent;
  let fixture: ComponentFixture<HeaderHtmlCopyCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderHtmlCopyCodeComponent]
    });
    fixture = TestBed.createComponent(HeaderHtmlCopyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
