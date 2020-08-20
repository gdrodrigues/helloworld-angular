import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {ItemMenu} from "./main-nav/item-menu";
import {ItemSubmenu} from "./main-nav/item-submenu";
import {Componente} from "./componente";

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
  componentes: Array<Componente> = new Array<Componente>();

  ngOnInit() {
    this.addItensMenu();
    this.addItensSubMenu();
    this.addComponentes();
  }
  addItensMenu() {
    this.itensMenu.push(new ItemMenu("Pagina Filtro Resultado Paginado", false, true, this.itensPaginaFiltroResultadoPaginado));
    this.itensMenu.push(new ItemMenu("Dialog", false, true, this.itensDialog));
    this.itensMenu.push(new ItemMenu("File Upload", false, true, null));
    this.itensMenu.push(new ItemMenu("Button", false, true, null, 'teste'));
    this.itensMenu.push(new ItemMenu("Loader", false, true, null));
    this.itensMenu.push(new ItemMenu("Table", false, true, this.itensTable, 'teste2'));
    this.itensMenu.push(new ItemMenu("FAQ", false,true, null, 'home'));
  }

  addItensSubMenu(){
    this.itensPaginaFiltroResultadoPaginado.push(new ItemSubmenu("Filtro1",false, true));
    this.itensPaginaFiltroResultadoPaginado.push(new ItemSubmenu("Filtro2",false, true));
    this.itensDialog.push(new ItemSubmenu("Dialog 1", false, true));
    this.itensTable.push(new ItemSubmenu("Tabela 10x10", false,true));
  }

  addComponentes(){
    this.componentes.push(new Componente("Dialog", "Esse componente é um dialog que faz isso, isso e isso",null,'./app/teste/teste.component.html'));
    this.componentes.push(new Componente("File Upload", "Esse componente é um file upload que faz isso, isso e isso",null,'./app/teste/teste.component.html'));
    this.componentes.push(new Componente("Button", "Esse componente é um button que faz isso, isso e isso",null,'./app/teste/teste.component.html'));
  }

}
