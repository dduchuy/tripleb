import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  itemService: any;
  itemList;
  router;

  static get parameters() {
    return[ItemService, Router];
  }

  constructor(itemService, router) {
    this.itemService = itemService;
    this.router = router;
  }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(itemList => {
      this.itemList = itemList;
      console.log(this.itemList);
    });
  }

}
