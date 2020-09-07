import {Component, Input, OnInit} from '@angular/core';
import {ItemMenu} from "../item-menu";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  showSubmenu = false;

  @Input()
  items: Array<ItemMenu>;

  toggleDisplayDiv() {
    this.showSubmenu = !this.showSubmenu;
  }

  constructor() {}

  ngOnInit(): void {
  }



}
