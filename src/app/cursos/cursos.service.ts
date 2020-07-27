import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() {}
  // tslint:disable-next-line:typedef
  getCursos() {
      return ['Java', 'Angular', 'Spring Boot', 'Linguagens Formais'];
  }
}
