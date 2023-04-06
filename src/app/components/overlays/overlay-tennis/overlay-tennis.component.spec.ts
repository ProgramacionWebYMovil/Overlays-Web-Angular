import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayTennisComponent } from './overlay-tennis.component';

describe('OverlayTennisComponent', () => {
  let component: OverlayTennisComponent;
  let fixture: ComponentFixture<OverlayTennisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayTennisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayTennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
