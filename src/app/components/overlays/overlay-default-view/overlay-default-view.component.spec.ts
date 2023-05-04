import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayDefaultViewComponent } from './overlay-default-view.component';

describe('OverlayDefaultViewComponent', () => {
  let component: OverlayDefaultViewComponent;
  let fixture: ComponentFixture<OverlayDefaultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayDefaultViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayDefaultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
