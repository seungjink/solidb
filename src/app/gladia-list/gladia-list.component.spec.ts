import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GladiaListComponent } from './gladia-list.component';

describe('GladiaListComponent', () => {
  let component: GladiaListComponent;
  let fixture: ComponentFixture<GladiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GladiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GladiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
