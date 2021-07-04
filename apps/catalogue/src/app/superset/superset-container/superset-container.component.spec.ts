import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersetContainerComponent } from './superset-container.component';

describe('SupersetContainerComponent', () => {
  let component: SupersetContainerComponent;
  let fixture: ComponentFixture<SupersetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupersetContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
