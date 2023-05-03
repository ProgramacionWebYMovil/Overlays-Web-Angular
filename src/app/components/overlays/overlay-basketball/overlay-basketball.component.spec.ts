import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayBasketballComponent } from './overlay-basketball.component';

describe('OverlayBasketballComponent', () => {
  let component: OverlayBasketballComponent;
  let fixture: ComponentFixture<OverlayBasketballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayBasketballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayBasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
