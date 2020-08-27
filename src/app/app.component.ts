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
  //componentes: Array<Componente> = new Array<Componente>();

  ngOnInit() {
    this.addItensMenu();
    this.addItensSubMenu();
    //this.addComponentes();
  }
  addItensMenu() {
    this.itensMenu.push(new ItemMenu("Pagina Filtro Resultado Paginado", false, true, this.itensPaginaFiltroResultadoPaginado));
    this.itensMenu.push(new ItemMenu("Dialog", false, true, this.itensDialog));
    this.itensMenu.push(new ItemMenu("File Upload", false, true, null));
    this.itensMenu.push(new ItemMenu("Button", false, true, null, 'teste'));
    this.itensMenu.push(new ItemMenu("Loader", false, true, null));
    this.itensMenu.push(new ItemMenu("Table", false, true, this.itensTable, 'teste2'));
    this.itensMenu.push(new ItemMenu("FAQ", false,true, null));
  }

  addItensSubMenu(){
    this.itensPaginaFiltroResultadoPaginado.push(new ItemSubmenu("Filtro1",false, true));
    this.itensPaginaFiltroResultadoPaginado.push(new ItemSubmenu("Filtro2",false, true));
    this.itensDialog.push(new ItemSubmenu("Dialog 1", false, true));
    this.itensTable.push(new ItemSubmenu("Tabela 10x10", false,true));
  }
  /*
  addComponentes(){
    this.componentes.push(new Componente("Pagina Filtro Resultado Paginado", "Componente que encapsula toda a área de resultado de uma tela de filtro do Selic. O componente possui paginação para os resultados",null,null));
    this.componentes.push(new Componente("Dialog", "Componente \"Diálogo\" com função alert e modal. Estão disponíveis em diferentes tamanhos.",null,'./app/teste/teste.component.html'));
    this.componentes.push(new Componente("File Upload", "Componente para upload de arquivos",null,'./app/teste/teste.component.html'));
    this.componentes.push(new Componente("Button", "Botões para utilização em formulário, tabela e para inclusão de itens em tabela. Disponíveis em versões \"habilitado\" e \"desabilitado\" ",null,null));
    this.componentes.push(new Componente("Loader - Tela Cheia", "Componente de loader para a tela cheia", null, null));
    this.componentes.push(new Componente("Loader - Componente", "Componente de loader para um componente específico", null, null));
    this.componentes.push(new Componente("Tabela Simples", "Tabela com título para as colunas e sem scroll. Indicado caso a tabela não tenha muitas linhas.", null, null));
    this.componentes.push(new Componente("Tabela Page", "Tabela com título, header fixo e scroll que ficará diretamente na página em que é utilizado.",null,null));
    this.componentes.push(new Componente("Tabela Form", "Tabela com título, header fixo e scroll. Ela estará dentro de uma estrutura form", null, null));
    this.componentes.push(new Componente("Tabela Dialog", "Tabela dentro de uma estrutura de dialog. Ela possui título, header fixo e scroll, além disso, estará dentro de uma estrutura form", null,null))
  }
   */

}
