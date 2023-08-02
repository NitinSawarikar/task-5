import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddashbordComponent } from './hoddashbord.component';

describe('HoddashbordComponent', () => {
  let component: HoddashbordComponent;
  let fixture: ComponentFixture<HoddashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoddashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoddashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
