import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GladiaDetailComponent } from './gladia-detail.component';

describe('GladiaDetailComponent', () => {
  let component: GladiaDetailComponent;
  let fixture: ComponentFixture<GladiaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GladiaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GladiaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
