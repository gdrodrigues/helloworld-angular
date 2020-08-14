import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {ItemMenu} from "./main-nav/item-menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  itensMenu: Array<ItemMenu> = new Array<ItemMenu>();

  ngOnInit() {
    this.addItensMenu();
  }
  addItensMenu() {
    this.itensMenu.push(new ItemMenu("Início", false,  true, []))
    this.itensMenu.push(new ItemMenu("Pagina Filtro Resultado Paginado", false, true,["Filtro1", "Filtro2"]));
    this.itensMenu.push(new ItemMenu("Dialog", false, true, []));
    this.itensMenu.push(new ItemMenu("File Upload", false, true, []));
    this.itensMenu.push(new ItemMenu("Button", false, true, []));
    this.itensMenu.push(new ItemMenu("Loader", false, true, []));
    this.itensMenu.push(new ItemMenu("Table", false, true, []));
    this.itensMenu.push(new ItemMenu("FAQ", false,true, []));
  }

}
