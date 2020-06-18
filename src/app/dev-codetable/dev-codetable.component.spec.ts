import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCodetableComponent } from './dev-codetable.component';

describe('DevCodetableComponent', () => {
  let component: DevCodetableComponent;
  let fixture: ComponentFixture<DevCodetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevCodetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevCodetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
