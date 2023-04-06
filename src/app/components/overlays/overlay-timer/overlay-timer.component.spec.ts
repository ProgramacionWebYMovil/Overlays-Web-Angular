import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayTimerComponent } from './overlay-timer.component';

describe('OverlayTimerComponent', () => {
  let component: OverlayTimerComponent;
  let fixture: ComponentFixture<OverlayTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
