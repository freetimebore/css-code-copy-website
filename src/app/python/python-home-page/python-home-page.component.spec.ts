import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonHomePageComponent } from './python-home-page.component';

describe('PythonHomePageComponent', () => {
  let component: PythonHomePageComponent;
  let fixture: ComponentFixture<PythonHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PythonHomePageComponent]
    });
    fixture = TestBed.createComponent(PythonHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
