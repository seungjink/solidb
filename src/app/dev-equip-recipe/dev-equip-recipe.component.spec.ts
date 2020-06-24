import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevEquipRecipeComponent } from './dev-equip-recipe.component';

describe('DevEquipRecipeComponent', () => {
  let component: DevEquipRecipeComponent;
  let fixture: ComponentFixture<DevEquipRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevEquipRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevEquipRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
