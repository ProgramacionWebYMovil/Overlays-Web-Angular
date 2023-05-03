import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsFootballComponent } from './buttons-football.component';

describe('ButtonsFootballComponent', () => {
  let component: ButtonsFootballComponent;
  let fixture: ComponentFixture<ButtonsFootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsFootballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
