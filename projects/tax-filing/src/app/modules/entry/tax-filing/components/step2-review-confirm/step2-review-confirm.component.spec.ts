import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2ReviewConfirmComponent } from './step2-review-confirm.component';

describe('Step2ReviewConfirmComponent', () => {
  let component: Step2ReviewConfirmComponent;
  let fixture: ComponentFixture<Step2ReviewConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step2ReviewConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2ReviewConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
