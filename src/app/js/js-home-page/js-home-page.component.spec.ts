import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsHomePageComponent } from './js-home-page.component';

describe('JsHomePageComponent', () => {
  let component: JsHomePageComponent;
  let fixture: ComponentFixture<JsHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsHomePageComponent]
    });
    fixture = TestBed.createComponent(JsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
