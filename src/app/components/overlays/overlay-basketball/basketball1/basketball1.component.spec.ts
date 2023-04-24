import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basketball1Component } from './basketball1.component';

describe('Basketball1Component', () => {
  let component: Basketball1Component;
  let fixture: ComponentFixture<Basketball1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Basketball1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basketball1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
