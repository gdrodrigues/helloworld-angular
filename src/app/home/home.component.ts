import {Component, OnInit} from '@angular/core';
import {Componente} from "../componente";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  componentes: Array<Componente> = new Array<Componente>();

  constructor() { }

  ngOnInit(): void {
    this.addComponentes();
  }

  addComponentes(){
    this.componentes.push(new Componente("Pagina Filtro Resultado Paginado", "Componente que encapsula toda a área de resultado de uma tela de filtro do Selic. O componente possui paginação para os resultados",null,null));
    this.componentes.push(new Componente("Dialog", "Componente \"Diálogo\" com função alert e modal. Estão disponíveis em diferentes tamanhos.",null,'./app/teste/teste.component.html'));
    this.componentes.push(new Componente("File Upload", "Componente para upload de arquivos",null,'./app/teste/teste.component.html'));
    this.componentes.push(new Componente("Button", "Botões para utilização em formulário, tabela e para inclusão de itens em tabela. Disponíveis em versões \"habilitado\" e \"desabilitado\" ",null,null));
    this.componentes.push(new Componente("Loader - Tela Cheia", "Componente de loader para a tela cheia", null, null));
    this.componentes.push(new Componente("Loader - Componente", "Componente de loader para um componente específico", null, null));
    this.componentes.push(new Componente("Tabela Simples", "Tabela com título para as colunas e sem scroll. Indicado caso a tabela não tenha muitas linhas.", null, null));
    this.componentes.push(new Componente("Tabela Page", "Tabela com título, header fixo e scroll que ficará diretamente na página em que é utilizado.",null,null));
    this.componentes.push(new Componente("Tabela Form", "Tabela com título, header fixo e scroll. Ela estará dentro de uma estrutura form.", null, null));
    this.componentes.push(new Componente("Tabela Dialog", "Tabela dentro de uma estrutura de dialog. Ela possui título, header fixo e scroll, além disso, estará dentro de uma estrutura form.", null,null))
  }

}
