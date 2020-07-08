/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

class volume {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.V = V;
    this.v = x + (w) / 2;
    this.t = 0;
    this.color = 0;
  }
  update() {
    if (mouseX >= this.x && mouseX <= this.x + this.w) {
      if (In(this.v, this.y+10, 20, 40))
        if (mouseIsPressed)
          t = 1;

      if (!(mouseIsPressed))
        t = 0;

      if (t == 1) {
        this.V = map(mouseX, this.x, this.x + this.w, 0, 1);
        this.v = mouseX;
      }
    } else if (t == 1) {
      if (mouseX <= this.x) {
        this.V = 0;
        this.v = this.x;
      } else if (mouseX >= this.x + this.w) {
        this.V = 1;
        this.v = this.x + this.w;
      }
    }

    V = this.V;
  }


  draw() {
    push();

    fill(200, 200);
    rect(this.x, this.y, this.w, 20);
    fill(255);
    rectMode(CENTER);
    if(t == 0)
      fill(255);
    else fill(180);
    rect(this.v, this.y + 10, 20, 40)
    pop();
  }
}