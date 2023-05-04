import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayFootball1Component } from './overlay-football1.component';

describe('OverlayFootballComponent', () => {
  let component: OverlayFootball1Component;
  let fixture: ComponentFixture<OverlayFootball1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayFootball1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayFootball1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
