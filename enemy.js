/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

class enemy {

  constructor(x, y, z) {
    this.Po = new Vec2(x, y);
    this.Pob = new Vec2(0, 0);
    this.Sp = new Vec2(0, 0);
    this.Gr = new Vec2(0, 0.2);
    this.Pl = [
      [170, 280],
      [430, 280],
      [80, 220],
      [530, 220]
    ]
    this.z = z
  }

  knight() {
    this.Po.addTo(this.Sp);
    this.Sp.addTo(this.Gr);
    this.Sp.setX(this.z);


    if (this.Po.getY() >= 350) {
      this.Sp.setY(0);
    }

    if (this.Sp.getY() == 0) {
      this.Sp.setY(random(-5, -7));
    }

    for (let i = 0; i < this.Pl.length; i++) {

      if (this.Po.getY() >= this.Pl[i][1] && this.Po.getY() <= this.Pl[i][1] + 5 && this.Po.getX() >= this.Pl[i][0] - 50 && this.Po.getX() <= this.Pl[i][0] + 50)
        if (this.Sp.getY() >= 0) {
          this.Sp.setY(0);
        }
    }

  }

  bullet(x, y) {
    this.Pob = new Vec2(x, y);
    this.Pob.addTo(this.Sp);
    this.Sp.addTo(this.Gr);
    //console.log(this.Sp.getY())
  }

}