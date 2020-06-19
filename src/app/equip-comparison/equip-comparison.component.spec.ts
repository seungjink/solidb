import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipComparisonComponent } from './equip-comparison.component';

describe('EquipComparisonComponent', () => {
  let component: EquipComparisonComponent;
  let fixture: ComponentFixture<EquipComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
