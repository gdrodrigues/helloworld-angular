export class ItemMenu {

  visible: boolean;
  active = false;
  name: string;
  state: object;
  filhos: [];

  constructor(name: string, active: boolean, visible: boolean, filhos: []) {
    this.name = name;
    this.active = active;
    this.visible = visible;
    this.filhos = filhos;
  }

  public hide() {
    this.visible = false;
    this.active = false;
  }

  public show() {
    this.visible = true;
    this.active = true;
  }

}
