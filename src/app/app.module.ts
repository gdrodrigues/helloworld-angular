import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';
import { CorpoIndex } from './corpo-index/corpo-index';
import {CursosModule} from './cursos/cursos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuListComponent } from './main-nav/menu-list/menu-list.component';
import {MatCardModule} from "@angular/material/card";
import {AppRoutingModule} from "./app-routing.module";
import { TesteComponent } from './teste/teste/teste.component';
import { Teste2Component } from './teste2/teste2/teste2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    CorpoIndex,
    MainNavComponent,
    MenuListComponent,
    TesteComponent,
    Teste2Component,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
