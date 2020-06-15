import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipDetailComponent } from './equip-detail.component';

describe('EquipDetailComponent', () => {
  let component: EquipDetailComponent;
  let fixture: ComponentFixture<EquipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
