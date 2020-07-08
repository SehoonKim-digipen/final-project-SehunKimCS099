/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

class Button {
  constructor(center_x , center_y, x , y ,z) {
    const default_width = 130;
    const default_height = 40;
    this.I1 = x
    this.I2 = y
    this.I3 = z
    this.left = center_x - default_width / 2;
    this.top = center_y - default_height / 2;
    this.width = default_width;
    this.height = default_height;
    this.mouseIsOver = false;
    this.mouseWasPressed = false;
  }

  DrawButton() {
    push();

    stroke(159);
    let fill_color = 220;
    let label_offset = 0;
    if (this.mouseIsOver) {
      if (mouseIsPressed) {
        fill_color = 200;
        label_offset = 1;
      } else {
        fill_color = 240;
      }

    }
    translate(this.left, this.top);
    if(fill_color == 220)
    image(Playy[this.I1],65,25);
    else if(fill_color == 240)  image(Playy[this.I2],65,25);
      else image(Playy[this.I3],65,25);
    //rect(0, 0,this.width,this.height);
    pop();
  }

  DidClickButton() {
    const left = this.left;
    const top = this.top;
    const right = left + this.width;
    const bottom = top + this.height;

    const within_x = mouseX > left && mouseX < right;
    const within_y = mouseY > top && mouseY < bottom;

    this.mouseIsOver = within_x && within_y;

    const clicked_it =
      this.mouseIsOver && this.mouseWasPressed && !mouseIsPressed;

    this.mouseWasPressed = mouseIsPressed;

    return clicked_it;
  }
}