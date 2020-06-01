import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort'
import { SoliProviderService } from '../shared/soli-provider.service'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {
  rawdata : any ;
  dataSource : any;
  passedObject = this;
  displayedColumns: string[] = ['ID', 'Position', 'Type',
    'ChaAtkType_1' ,'ChaAtkType_2' ,'ChaAtkType_3' ,'ChaAtkType_4' ,'ChaAtkType_5' ,'ChaAtkType_6' ,'ChaAtkType_7'];

  constructor(
    private soliProvider: SoliProviderService
  ) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.soliProvider.getdataAgent())
    this.dataSource.sort = this.sort
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
