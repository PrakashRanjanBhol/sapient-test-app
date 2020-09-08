import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLaunchProgramComponent } from './all-launch-program.component';

describe('AllLaunchProgramComponent', () => {
  let component: AllLaunchProgramComponent;
  let fixture: ComponentFixture<AllLaunchProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLaunchProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLaunchProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
