import {ItemSubmenu} from "./item-submenu";

export class ItemMenu {

  visible: boolean;
  active = false;
  name: string;
  state: object;
  filhos: Array<ItemSubmenu>;

  constructor(name: string, active: boolean, visible: boolean, filhos: Array<ItemSubmenu>) {
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
