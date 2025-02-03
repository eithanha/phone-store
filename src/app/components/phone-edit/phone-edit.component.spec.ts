import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneEditComponent } from './phone-edit.component';

describe('PhoneEditComponent', () => {
  let component: PhoneEditComponent;
  let fixture: ComponentFixture<PhoneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
