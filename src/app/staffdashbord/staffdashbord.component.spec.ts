import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffdashbordComponent } from './staffdashbord.component';

describe('StaffdashbordComponent', () => {
  let component: StaffdashbordComponent;
  let fixture: ComponentFixture<StaffdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffdashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
