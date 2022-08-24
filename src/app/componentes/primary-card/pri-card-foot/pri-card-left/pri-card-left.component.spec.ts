import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriCardLeftComponent } from './pri-card-left.component';

describe('PriCardLeftComponent', () => {
  let component: PriCardLeftComponent;
  let fixture: ComponentFixture<PriCardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriCardLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
