import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffleaveformComponent } from './staffleaveform.component';

describe('StaffleaveformComponent', () => {
  let component: StaffleaveformComponent;
  let fixture: ComponentFixture<StaffleaveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffleaveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffleaveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
