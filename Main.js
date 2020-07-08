/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

class MainMenu {
  constructor() {
    const center_x = width / 2;
    this.play = new Button(center_x, height / 30 * 16.5,0,1,14);
    this.options = new Button(center_x, height /30 * 20,2,3,15);
    this.credits = new Button(center_x, height /30 * 24,4,5,16);
  }

  Update() {
    if (this.play.DidClickButton()) {
      GameState = 'Story';
    } else if (this.options.DidClickButton()) {
      GameState = 'Options';
    } else if (this.credits.DidClickButton()) {
      GameState = 'Credits';
    }
  }

  Draw() {
    this.play.DrawButton();
    this.options.DrawButton();
    this.credits.DrawButton();
  }
}