import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPaddle1Component } from './overlay-paddle1.component';

describe('OverlayPaddle1Component', () => {
  let component: OverlayPaddle1Component;
  let fixture: ComponentFixture<OverlayPaddle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayPaddle1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayPaddle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
