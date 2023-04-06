import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayFootballComponent } from './overlay-football.component';

describe('OverlayFootballComponent', () => {
  let component: OverlayFootballComponent;
  let fixture: ComponentFixture<OverlayFootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayFootballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
