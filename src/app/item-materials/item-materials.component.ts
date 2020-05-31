import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort'
import { SoliProviderService } from '../soli-provider.service'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-item-materials',
  templateUrl: './item-materials.component.html',
  styleUrls: ['./item-materials.component.scss']
})
export class ItemMaterialsComponent implements OnInit {
  dataSource : any;


  displayedColumns: string[] = ['ID', 'Name', 'Tier','Sell', 'Buy'];

  constructor(
    public dialog: MatDialog,
    soliProvider: SoliProviderService
  ) {
    this.dataSource = new MatTableDataSource(soliProvider.getdataItemMaterial())
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.dataSource.sort = this.sort
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
