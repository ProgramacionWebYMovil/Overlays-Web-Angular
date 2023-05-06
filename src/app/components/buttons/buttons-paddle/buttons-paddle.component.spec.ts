import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPaddleComponent } from './buttons-paddle.component';

describe('ButtonsPaddleComponent', () => {
  let component: ButtonsPaddleComponent;
  let fixture: ComponentFixture<ButtonsPaddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsPaddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsPaddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
