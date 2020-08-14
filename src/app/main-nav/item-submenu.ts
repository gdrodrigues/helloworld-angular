export class ItemSubmenu {

  visible: boolean;
  active = false;
  name: string;
  state: object;

  constructor(name: string, active: boolean, visible: boolean) {
    this.name = name;
    this.active = active;
    this.visible = visible;
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
