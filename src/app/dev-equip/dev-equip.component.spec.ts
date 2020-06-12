import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevEquipComponent } from './dev-equip.component';

describe('DevEquipComponent', () => {
  let component: DevEquipComponent;
  let fixture: ComponentFixture<DevEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
