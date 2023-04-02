import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOverlaysComponent } from './my-overlays.component';

describe('MyOverlaysComponent', () => {
  let component: MyOverlaysComponent;
  let fixture: ComponentFixture<MyOverlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOverlaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOverlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
