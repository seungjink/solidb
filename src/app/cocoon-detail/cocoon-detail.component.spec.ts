import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoonDetailComponent } from './cocoon-detail.component';

describe('CocoonDetailComponent', () => {
  let component: CocoonDetailComponent;
  let fixture: ComponentFixture<CocoonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocoonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
