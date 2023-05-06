import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsOverlaysComponent } from './inputs-overlays.component';

describe('InputsOverlaysComponent', () => {
  let component: InputsOverlaysComponent;
  let fixture: ComponentFixture<InputsOverlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsOverlaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsOverlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
