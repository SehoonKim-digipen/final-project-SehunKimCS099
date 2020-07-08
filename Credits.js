/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

class Credits {
  constructor() {
    this.Main = new Button(width/10* 9,height / 30 * 26,6,7,17);
  }

  Update() {
    if (this.Main.DidClickButton()) {
      GameState = 'Main';
    } 
  }

  Draw() {
    this.Main.DrawButton();
  }
}