import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMaterialsDetailComponent } from './item-materials-detail.component';

describe('ItemMaterialsDetailComponent', () => {
  let component: ItemMaterialsDetailComponent;
  let fixture: ComponentFixture<ItemMaterialsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMaterialsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMaterialsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
