/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

class Vec2 {

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  setX(value) {
    this.x = value;
  }

  getX() {
    return this.x;
  }

  setY(value) {
    this.y = value;
  }

  getY() {
    return this.y;
  }

  getAngle() {
    return atan2(this.x, this.y);
  }

  setAngle(angle_in_radians) {
    var length = this.getLength();
    this.x = cos(angle_in_radians) * length;
    this.y = sin(angle_in_radians) * length;
  }

  getLength() {
    return sqrt(this.x * this.x + this.y * this.y);
  }

  setLength(length) {
    var angle_in_radians = this.getAngle();
    this.x = cos(angle_in_radians) * length;
    this.y = sin(angle_in_radians) * length;
  }

  add(v2) {
    return new Vec2(this.x + v2.x, this.y + v2.y);
  }

  addTo(v2) {
    this.x = this.x + v2.x;
    this.y = this.y + v2.y;
  }

  subtract(v2) {
    return new Vec2(this.x - v2.x, this.y - v2.y);
  }

  subtractFrom(v2) {
    this.x = this.x - v2.x;
    this.y = this.y - v2.y;
  }

  multiply(scalar) {
    return new Vec2(this.x * scalar, this.y * scalar);
  }

  multiplyBy(scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
  }

  divide(scalar) {
    return new Vec2(this.x / scalar, this.y / scalar);
  }
  divideBy(scalar) {
    this.x = this.x / scalar;
    this.y = this.y / scalar;
  }

}

class particle {
  constructor(x, y, s, d) {
    this.p = new Vec2(x, y);
    this.s = new Vec2(0, 0);
    this.s.setLength(s);
    this.s.setAngle(d);
  }

  accelerate(accel) {
    this.s.addTo(accel);
  }

  update() {
    this.p.addTo(this.s);
  }

}
