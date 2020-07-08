/* Sehun Kim 
   CS099 Project Checkpoint - Prototype
   cs099s20 
   Spring 2020 */

class object {

  constructor(x, y) {
    this.Po = new Vec2(x, y);
    this.Sp = new Vec2(0, 0);
    this.Gr = new Vec2(0, 0.2);
    this.Color = (255, 255, 255);
    this.Hp = 100;
    this.frame = 0;
    this.Pl = [
      [170, 280],
      [430, 280],
      [80, 220],
      [530, 220]
    ]
    this.plat = loadImage('image/plat.png')
  }

  update() {
    if (State != 'dead' && PState != 'dead' && boss.y >= 250) {
      if (frameCount % 2 == 1)
        translate(-random(1, 5), 0)
      else translate(random(1, 5), 0)
    }

    this.Po.addTo(this.Sp);
    this.Sp.addTo(this.Gr);
    if (this.Po.getY() >= 350) {
      this.Sp.setY(0);
    }

    for (let i = 0; i < this.Pl.length; i++) {
      if (this.Po.getY() >= this.Pl[i][1] && this.Po.getY() <= this.Pl[i][1] + 7 && this.Po.getX() >= this.Pl[i][0] - 50 && this.Po.getX() <= this.Pl[i][0] + 50)
        if (this.Sp.getY() >= 0) {
          this.Sp.setY(0);
          if (keyIsDown(DOWN_ARROW)) this.Sp.setY(2)
        }
    }

    if (this.Sp.getY() == 0) {
      if (keyIsDown(UP_ARROW)) {
        this.Sp.setY(-6);
        Jump.play();
      }
    }
    this.Sp.setX(0);

    if (this.Po.getX() + 5 > width) this.Sp.setX(0);
    else if (keyIsDown(RIGHT_ARROW)) this.Sp.setX(4);

    if (this.Po.getX() - 5 < 0) {
      this.Po.setX(5)
      this.Sp.setX(0)
    } else if (keyIsDown(LEFT_ARROW)) this.Sp.setX(-4);

    push()
    coka.Pshow();
    coka.animate();
    if (this.Color == 1) {
      coka2.Pshow();
      coka2.animate();
    }
    //fill(this.Color, 20)
    //rect(this.Po.getX(), this.Po.getY(), 12, 16);
    pop()
  }

  pl() {
    if (State != 'dead' && PState != 'dead' && boss.y >= 250 || this.frame < 20 && PState == 'pain') {
      if (frameCount % 2 == 1 || this.frame % 2 == 1)
        translate(-random(1, 5), 0)
      else translate(random(1, 5), 0)
    }

    for (let i = 0; i < this.Pl.length; i++) {
      image(this.plat, this.Pl[i][0], this.Pl[i][1] + 20)
    }

  }


  playerState() {
    switch (PState) {
      case 'Main':

        break;
      case 'nomal':
        this.Color = 0
        this.frame = 0

        for (let i = 0; i < bullet.length; i++) {
          if (dist(bullet[i].Po.getX(), bullet[i].Po.getY(), O.Po.getX(), O.Po.getY()) <= 7) {
            this.Hp -= 15;
            PState = 'pain';
          }
        }
        if (State == 'attack2')
          if (pain(boss.x, boss.y, 80, 200) == true) {
            this.Hp -= 25;
            PState = 'pain';
          }
        if ((State == 'charge1' || State == 'charge2') && Co <= 28)
          if (pain(boss.x, boss.y, 80, 180) == true) {
            this.Hp -= 20;
            PState = 'pain';
          }


        for (let i = 0; i < knight.length; i++) {
          if (pain(knight[i].Po.getX(), knight[i].Po.getY(), 10, 20) == true) {
            this.Hp -= 10;
            PState = 'pain';
          }
        }
        break;


      case 'pain':
        if (this.frame == 0)
          Hit.play();
        this.frame += 1;
        if (this.frame <= 5) {
          push();
          fill(240, 20, 20, 120)
          rect(width / 2, height / 2, 600, 400)
          pop();
        }
        if (this.frame < 20)
          if (this.frame % 2 == 1)
            translate(-random(1, 5), 0)
        else translate(random(1, 5), 0)


        if (this.frame % 16 < 8) {
          this.Color = 1;
        } else this.Color = 0;
        if (this.frame > 150)
          PState = 'nomal'
        break;

      case 'dead':
        push()
        textSize(100);
        text('YOU LOSE!!!', 300, 200);
        textSize(50);
        text('Press R to restart', 300, 270);
        text('Press Z to MainMenu', 300, 330);
        pop()
        break;

      case 'restart':
        if (Mode == 'Nomal')
          this.Hp = 100;
        else if (Mode == 'Hard')
          this.Hp = 25;
        else this.Hp = 250;
        PState = 'nomal';
        this.Po = new Vec2(300, 250);
        break;

      case 0:
        if (Mode == 'Nomal')
          this.Hp = 100;
        else if (Mode == 'Hard')
          this.Hp = 25;
        else this.Hp = 250;
        PState = 'nomal';
        this.Po = new Vec2(300, 250);
        break;


    }


  }


}