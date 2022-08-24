import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosAPComponent } from './logos-ap.component';

describe('LogosAPComponent', () => {
  let component: LogosAPComponent;
  let fixture: ComponentFixture<LogosAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosAPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
