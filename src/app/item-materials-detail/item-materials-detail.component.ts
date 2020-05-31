import { Component, OnInit } from '@angular/core';
import { SoliProviderService } from '../soli-provider.service'
import {ActivatedRoute} from '@angular/router';
import { ItemIDToList } from '../soliHashTable';

@Component({
  selector: 'app-item-materials-detail',
  templateUrl: './item-materials-detail.component.html',
  styleUrls: [
    './item-materials-detail.component.scss',
    '../../assets/style/base-detail.component.scss'
  ]
})

export class ItemMaterialsDetailComponent implements OnInit {

  public idItem: string;
  data: any;
  constructor(
    private soliProvider: SoliProviderService,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
    this.idItem = params["id"];
    this.data = this.soliProvider.getdataItemMaterial()[ItemIDToList[this.idItem]]
    });
  }
}
