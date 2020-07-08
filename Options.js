/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

class Options {
  constructor() {
    this.Easy = new Button(width/10*2, height / 10 *7,8,9,18);
    this.Nomal = new Button(width/10*5, height /10 * 7 ,10,11,19);
    this.Hard = new Button(width/10*8, height /10 * 7,12,13,20);
    this.Main = new Button(width/10* 9,height / 30 * 26,6,7,17);
  }

  Update() {
    if (this.Easy.DidClickButton()) {
      Mode = 'Easy';
    } else if (this.Nomal.DidClickButton()) {
      Mode = 'Nomal';
    } else if (this.Hard.DidClickButton()) {
      Mode = 'Hard';
    } else if (this.Main.DidClickButton()) {
      GameState = 'Main';
    } 
  }

  Draw() {
    this.Main.DrawButton();
    this.Easy.DrawButton();
    this.Nomal.DrawButton();
    this.Hard.DrawButton();
  }
}