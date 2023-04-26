import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCardButtonComponent } from './dropdown-card-button.component';

describe('DropdownCardButtonComponent', () => {
  let component: DropdownCardButtonComponent;
  let fixture: ComponentFixture<DropdownCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCardButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
