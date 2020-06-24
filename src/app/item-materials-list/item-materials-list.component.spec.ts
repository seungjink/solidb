import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMaterialsListComponent } from './item-materials-list.component';

describe('ItemMaterialsListComponent', () => {
  let component: ItemMaterialsListComponent;
  let fixture: ComponentFixture<ItemMaterialsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMaterialsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMaterialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
