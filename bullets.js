/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

class bullets {

  constructor(x, y) {
    this.Po = new Vec2(x, y);
    this.Sp = new Vec2(0, 0);
    this.Gr = new Vec2(0, 0.1);
    this.Gr2 = new Vec2(0, 1);
  }

  bullet() {
    this.Po.addTo(this.Sp);
    this.Sp.addTo(this.Gr);
  }


  pillar(){
    this.Po.addTo(this.Sp);
    this.Sp.addTo(this.Gr2);
  }
}