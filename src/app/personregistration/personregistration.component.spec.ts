import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonregistrationComponent } from './personregistration.component';

describe('PersonregistrationComponent', () => {
  let component: PersonregistrationComponent;
  let fixture: ComponentFixture<PersonregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
