import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table';
import { SoliProviderService } from '../shared/soli-provider.service'
import { resistAtkType } from '../shared/soliHashTable'
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { stringify } from 'querystring';



@Component({
  selector: 'app-equip-list',
  templateUrl: './equip-list.component.html',
  styleUrls: ['./equip-list.component.scss',
  '../../assets/style/base-detail.component.scss',
]
})
export class EquipListComponent implements OnInit, OnDestroy {
  rawdata : any ;
  dataSource : any;
  equipForm = this.fb.group({
    ID: true,
    tier: false,
    atk_max: true,
    def_max: true,
    hp_max: true,
    skill_max: true,
    ChaAtkType_1: false,
    ChaAtkType_2: false,
    ChaAtkType_3: false,
    ChaAtkType_4: false,
    ChaAtkType_5: false,
    ChaAtkType_6: false,
    ChaAtkType_7: false,
  })

  filterAgentForm = this.fb.group({
    ChaPosition_Short: [{value:true, disabled:false}],
    ChaPosition_Tank: [{value:true, disabled:false}],
    ChaPosition_Long: [{value:true, disabled:false}],
    ChaPosition_Support: [{value:true, disabled:false}],
  })

  resistAtkType:Array<string> = resistAtkType;
  columnChanged:any;
  filterChanged:any;
  displayedColumn = Object.keys(this.equipForm.value).filter(k => this.equipForm.value[k]);
  appliedFilter = this.filterAgentForm.value

  constructor(
    private soliProvider: SoliProviderService,
    private fb: FormBuilder
  ) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.soliProvider.getdataEquip())
    this.dataSource.sort = this.sort
    this.columnChanged = this.equipForm.valueChanges.subscribe(value => {
      this.displayedColumn = Object.keys(value).filter(k => value[k])
    })

    this.filterChanged = this.filterAgentForm.valueChanges.subscribe(value => {
      this.applyFilter(value)
    })

    this.dataSource.filterPredicate = function(data, filter: any): boolean {
        return ((data.ChaPosition_Short  && filter.ChaPosition_Short)   ||
               (data.ChaPosition_Long    && filter.ChaPosition_Long)    ||
               (data.ChaPosition_Support && filter.ChaPosition_Support) ||
               (data.ChaPosition_Tank    && filter.ChaPosition_Tank))
    };    
  }

  ngOnDestroy(): void{
    this.columnChanged.unsubscribe();
    this.filterChanged.unsubscribe();
  }

  applyFilter(filterValue:Object){
    this.dataSource.filter = filterValue;
  }

  getMinMax(x, xmin, xmax){
    return (x+xmax == 0) ? "" : `${x+xmin} - ${x+xmax}`
  }
}
