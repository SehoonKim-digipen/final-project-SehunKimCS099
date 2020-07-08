/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

class Sprite {
  constructor(animation, x, y, speed) {
    this.x = x;
    this.y = y;
    //this.w = w;
    //this.h = h;
    this.animation = animation;
    this.len2 = this.animation.length;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
    this.Index = 0;
  }

  show() {
    if (this.len2 == 6) {
      if (Co >= 40 && Co <= 60) {
        this.Index = 4 + floor(this.index) % 2
      } else {
        this.len = 4
        this.Index = floor(this.index) % this.len
      }
    } else this.Index = floor(this.index) % this.len
    image(this.animation[this.Index], this.x, this.y)
  }

  Pshow() {
    if (keyIsDown(LEFT_ARROW)) 
      this.Index = 4+ floor(this.index) % 2
    else if (keyIsDown(RIGHT_ARROW))
      this.Index = 2+ floor(this.index) % 2
    else this.Index = floor(this.index) % 2
    image(this.animation[this.Index], this.x, this.y)
  }

  animate() {
    this.index += this.speed;
  }

  update() {
    this.x = boss.x;
    this.y = boss.y - 25;
  }
  
  Pupdate(){
  this.x = O.Po.getX();
  this.y = O.Po.getY();
  }
}