export class Componente {
  name: string
  conteudo: string
  doc: any
  exemplo: string

  constructor(name:string, conteudo: string, doc?: any, exemplo?:string) {
    this.name=name;
    this.conteudo=conteudo;
    this.doc=doc;
    this.exemplo=exemplo;
  }
}
