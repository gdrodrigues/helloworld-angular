import {Component, Input, OnInit} from '@angular/core';
import {Componente} from "../componente";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  componentes: Array<Componente>

  constructor() { }

  ngOnInit(): void {
  }

}
