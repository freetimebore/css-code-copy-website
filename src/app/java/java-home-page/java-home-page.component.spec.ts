import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaHomePageComponent } from './java-home-page.component';

describe('JavaHomePageComponent', () => {
  let component: JavaHomePageComponent;
  let fixture: ComponentFixture<JavaHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavaHomePageComponent]
    });
    fixture = TestBed.createComponent(JavaHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
