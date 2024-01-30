import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsHtmlCopyCodeComponent } from './cards-html-copy-code.component';

describe('CardsHtmlCopyCodeComponent', () => {
  let component: CardsHtmlCopyCodeComponent;
  let fixture: ComponentFixture<CardsHtmlCopyCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsHtmlCopyCodeComponent]
    });
    fixture = TestBed.createComponent(CardsHtmlCopyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
