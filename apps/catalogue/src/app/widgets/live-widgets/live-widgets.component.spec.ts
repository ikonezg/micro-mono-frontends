import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWidgetsComponent } from './live-widgets.component';

describe('LiveWidgetsComponent', () => {
  let component: LiveWidgetsComponent;
  let fixture: ComponentFixture<LiveWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
