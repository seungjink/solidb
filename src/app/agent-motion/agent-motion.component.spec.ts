import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMotionComponent } from './agent-motion.component';

describe('AgentMotionComponent', () => {
  let component: AgentMotionComponent;
  let fixture: ComponentFixture<AgentMotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentMotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
