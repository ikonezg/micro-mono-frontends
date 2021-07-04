import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersetWidgetListComponent } from './superset-widget-list.component';

describe('SupersetWidgetListComponent', () => {
  let component: SupersetWidgetListComponent;
  let fixture: ComponentFixture<SupersetWidgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupersetWidgetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersetWidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
