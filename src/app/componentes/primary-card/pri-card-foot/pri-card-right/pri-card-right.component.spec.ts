import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriCardRightComponent } from './pri-card-right.component';

describe('PriCardRightComponent', () => {
  let component: PriCardRightComponent;
  let fixture: ComponentFixture<PriCardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriCardRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
