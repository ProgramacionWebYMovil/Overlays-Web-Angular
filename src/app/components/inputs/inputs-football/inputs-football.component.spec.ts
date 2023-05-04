import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsFootballComponent } from './inputs-football.component';

describe('InputsFootballComponent', () => {
  let component: InputsFootballComponent;
  let fixture: ComponentFixture<InputsFootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsFootballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
