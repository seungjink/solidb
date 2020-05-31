import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort'
import { SoliProviderService } from '../soli-provider.service'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss']
})
export class QuestListComponent implements OnInit {
  rawdata : any;
  dataSource : any;
  displayedColumns: string[] = ['Name','Tier', 'Fatigue', 'Exp','RecStat'];

  constructor(
    private soliProvider: SoliProviderService
  ) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.soliProvider.getdataQuest())
    this.dataSource.sort = this.sort
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
