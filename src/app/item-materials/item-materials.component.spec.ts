import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMaterialsComponent } from './item-materials.component';

describe('ItemMaterialsComponent', () => {
  let component: ItemMaterialsComponent;
  let fixture: ComponentFixture<ItemMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
