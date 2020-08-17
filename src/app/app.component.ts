import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {ItemMenu} from "./main-nav/item-menu";
import {ItemSubmenu} from "./main-nav/item-submenu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  itensMenu: Array<ItemMenu> = new Array<ItemMenu>();
  itensPaginaFiltroResultadoPaginado: Array<ItemSubmenu> = new Array<ItemSubmenu>();
  itensDialog: Array<ItemSubmenu> = new Array<ItemSubmenu>();
  itensTable: Array<ItemSubmenu> = new Array<ItemSubmenu>();

  ngOnInit() {
    this.addItensMenu();
    this.addItensSubMenu();
  }
  addItensMenu() {
    this.itensMenu.push(new ItemMenu("Componentes", false,  true, null))
    this.itensMenu.push(new ItemMenu("Pagina Filtro Resultado Paginado", false, true, this.itensPaginaFiltroResultadoPaginado));
    this.itensMenu.push(new ItemMenu("Dialog", false, true, this.itensDialog));
    this.itensMenu.push(new ItemMenu("File Upload", false, true, null));
    this.itensMenu.push(new ItemMenu("Button", false, true, null));
    this.itensMenu.push(new ItemMenu("Loader", false, true, null));
    this.itensMenu.push(new ItemMenu("Table", false, true, this.itensTable));
    this.itensMenu.push(new ItemMenu("FAQ", false,true, null));
  }

  addItensSubMenu(){
    this.itensPaginaFiltroResultadoPaginado.push(new ItemSubmenu("Filtro1",false, true));
    this.itensPaginaFiltroResultadoPaginado.push(new ItemSubmenu("Filtro2",false, true));
    this.itensDialog.push(new ItemSubmenu("Dialog 1", false, true));
    this.itensTable.push(new ItemSubmenu("Tabela 10x10", false,true));
  }

}
