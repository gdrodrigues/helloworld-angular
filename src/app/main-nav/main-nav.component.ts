import {Component, Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
// @ts-ignore
import {ItemMenu} from "./item-menu";
import {Componente} from "../componente";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  @Input()
  items: Array<ItemMenu>;

  @Input()
  componentes: Array<Componente>

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  srcLogo: string;
  constructor(private breakpointObserver: BreakpointObserver) {
    // tslint:disable-next-line:label-position
    this.srcLogo = 'src/assets/menu-aberto.png';
  }

}
