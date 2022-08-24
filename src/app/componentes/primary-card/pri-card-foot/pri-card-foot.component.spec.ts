import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriCardFootComponent } from './pri-card-foot.component';

describe('PriCardFootComponent', () => {
  let component: PriCardFootComponent;
  let fixture: ComponentFixture<PriCardFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriCardFootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriCardFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
