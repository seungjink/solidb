import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevEquipRecipieComponent } from './dev-equip-recipie.component';

describe('DevEquipRecipieComponent', () => {
  let component: DevEquipRecipieComponent;
  let fixture: ComponentFixture<DevEquipRecipieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevEquipRecipieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevEquipRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
