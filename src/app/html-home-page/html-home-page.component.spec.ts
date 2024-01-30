import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlHomePageComponent } from './html-home-page.component';

describe('HtmlHomePageComponent', () => {
  let component: HtmlHomePageComponent;
  let fixture: ComponentFixture<HtmlHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlHomePageComponent]
    });
    fixture = TestBed.createComponent(HtmlHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
