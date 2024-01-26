import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCopyComponent } from './code-copy.component';

describe('CodeCopyComponent', () => {
  let component: CodeCopyComponent;
  let fixture: ComponentFixture<CodeCopyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeCopyComponent]
    });
    fixture = TestBed.createComponent(CodeCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
