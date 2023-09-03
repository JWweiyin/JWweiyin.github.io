import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPathComponent } from './uipath.component';

describe('UiPathComponent', () => {
  let component: UiPathComponent;
  let fixture: ComponentFixture<UiPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
