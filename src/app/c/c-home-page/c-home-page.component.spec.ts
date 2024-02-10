import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHomePageComponent } from './c-home-page.component';

describe('CHomePageComponent', () => {
  let component: CHomePageComponent;
  let fixture: ComponentFixture<CHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CHomePageComponent]
    });
    fixture = TestBed.createComponent(CHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
