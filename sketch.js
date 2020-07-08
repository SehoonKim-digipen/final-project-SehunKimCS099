/* Sehun Kim 
   CS099 Final Project
   cs099s20 
   Spring 2020 */

let GameState = 'Main';
let Mode = 'Nomal'
let State = 0;
let PState = 0;
let knight = []
let bullet = []
let bubble = []
let Play = []
let cokeke = [
  [],
  [],
  [],
  []
]
let BossP = [];
let coke = [];
let Storyy = [
  [],
  [],
  [],
  [],
  []
];
let Story = [];
let wow = [];
let BattleS = [];
let TitleS = [];
let Pcokaa = [];
let Pcokaa2 = [];
let Playy = [];
let Knightt = [];
let Kni = [];
let px, V, v, hp22, BG, Co = 0;
let c = 0;
let t = 0;
let story = 1;

let boss = {
  x: 300,
  y: -300,
  HP: 4,
  currentDistance: 0
}

function preload() {
  MBGM = createAudio('sound/main.mp3');
  BBGM = createAudio('sound/battle.mp3');
  VBGM = createAudio('sound/victory.mp3');

  Jump = loadSound('sound/jump.wav');
  Hit = loadSound('sound/hit.wav');
  Boom = loadSound('sound/boom.wav');

  StoryJ = loadJSON('image/StoryJ.json');
  BattleJ = loadJSON('image/BattleJ.json');
  PcokaJ = loadJSON('image/cokaJ.json');
  PlayJ = loadJSON('image/PlaySheetJ.json');
  KnightJ = loadJSON('image/KnightJ.json');
  Story[0] = loadImage('image/Story1.png');
  Story[1] = loadImage('image/Story2.png');
  Story[2] = loadImage('image/Story3.png');
  Story[3] = loadImage('image/HowtoPlay.png');
  Story[4] = loadImage('image/Win.png');
  Battle = loadImage('image/Battle.png');
  Title = loadImage('image/title.png');
  Pcoka = loadImage('image/coka.png');
  Pcoka2 = loadImage('image/coka2.png');
  Play = loadImage('image/PlaySheet.png');
  Knight = loadImage('image/Knight.png');
  hp1 = loadImage('image/hp1.png');
  hp2 = loadImage('image/hp2.png');

  //Boss
  BossJ = loadJSON('image/cokeke1.json');
  BossP[0] = loadImage('image/cokeke1.png');
  BossP[1] = loadImage('image/cokeke2.png');
  BossP[2] = loadImage('image/cokeke3.png');
  BossP[3] = loadImage('image/cokeke4.png');
  BossP5 = loadImage('image/cokeke5.png');
}

function Push(J, P, A) {
  let frames = J.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = P.get(pos.x, pos.y, pos.w, pos.h);
    A.push(img);
  }

}

function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);
  angleMode(DEGREES);
  O = new object(300, 250);
  Main = new MainMenu();
  Credits = new Credits();
  Options = new Options();
  Vo = new volume(width / 2, height / 3, 200);
  BG = 0;
  V = 0.5;

  c = random(2);
  for (let j = 0; j < 4; j++) {
    Push(BossJ, BossP[j], cokeke[j])
    coke[j] = new Sprite(cokeke[j], boss.x, boss.y, 0.3);
  }
  for (let j = 0; j < 5; j++) {
    Push(StoryJ, Story[j], Storyy[j])
    wow[j] = new Sprite(Storyy[j], width / 2, height / 2, 0.2);
  }
  Push(BattleJ, Battle, BattleS);
  Battles = new Sprite(BattleS, width / 2, height / 2, 0.2);

  Push(BattleJ, Title, TitleS);
  MainBG = new Sprite(TitleS, width / 2, height / 2, 0.2);

  Push(PcokaJ, Pcoka, Pcokaa);
  coka = new Sprite(Pcokaa, O.Po.getX(), O.Po.getY(), 0.2);

  Push(PcokaJ, Pcoka2, Pcokaa2);

  coka2 = new Sprite(Pcokaa2, O.Po.getX(), O.Po.getY(), 0.2);
  Push(PlayJ, Play, Playy);

  Push(KnightJ, Knight, Knightt);

}

function draw() {
  background(220);

  BBGM.volume(V);
  MBGM.volume(V);
  VBGM.volume(V);
  Jump.setVolume(V);
  Hit.setVolume(V);
  Boom.setVolume(V);

  if (GameState != 'Game') {
    rectMode(CORNER);
    textAlign(LEFT);
  }
  if (State == 'dead' || PState == 'dead') {
    knight.splice(0, knight.length);
    bullet.splice(0, bullet.length);
    bubble.splice(0, bubble.length);
  }
  if (GameState == 'Main' || GameState == 'Options' || GameState == 'Credits') {
    MainBG.show();
    MainBG.animate();
  }
  switch (GameState) {
    case 'Main':

      Main.Update();
      Main.Draw();
      if (Mode == 'Nomal') {
        O.Hp = 100;
        hp22 = 100;
      } else if (Mode == 'Hard') {
        O.Hp = 25;
        hp22 = 25;
      } else {
        O.Hp = 250;
        hp22 = 250;
      }
      O.Po = new Vec2(300, 250);
      boss = {
        x: 300,
        y: -300,
        HP: 4,
        currentDistance: 0
      }
      t = 0;
      break;

    case 'Story':
      if (story == 1) {
        text(story, width / 2, height / 2)
        wow[0].show();
        wow[0].animate();
      } else if (story == 2) {
        text(story, width / 2, height / 2)
        wow[1].show();
        wow[1].animate();
      } else if (story == 3) {
        text(story, width / 2, height / 2)
        wow[2].show();
        wow[2].animate();
      } else if (story == 4) {
        wow[3].show();
        wow[3].animate();
      }
      break;

    case 'Game':
      push();
      if (State != 'dead' && PState != 'dead' && boss.y >= 250 || this.frame < 20 && PState == 'pain') {
        if (boss.x > 0) {
          if (frameCount % 5 == 0)
            Boom.play()
          if (frameCount % 2 == 1 || this.frame % 2 == 1) {
            translate(-random(1, 5), 0)
          } else translate(random(1, 5), 0)
        }
      }
      Battles.show();
      Battles.animate();
      pop();
      if (t == 0) {
        PState = 'nomal'
        State = 'appear'
        t = 1
      }
      rectMode(CENTER);
      textAlign(CENTER);
      O.pl();
      O.playerState();
      coka.Pupdate();
      coka2.Pupdate();
      //rect(300, 400, width, 80);

      if (State != 'dead' && PState != 'dead') {
        if (boss.HP == 4) {
          coke[0].show();
          coke[0].animate();
          coke[0].update();
        } else if (boss.HP == 3) {
          coke[1].show();
          coke[1].animate();
          coke[1].update();
        } else if (boss.HP == 2) {
          coke[2].show();
          coke[2].animate();
          coke[2].update();
        } else if (boss.HP == 1) {
          coke[3].show();
          coke[3].animate();
          coke[3].update();
        } else image(BossP5, boss.x, boss.y - 25)
        if (boss.HP != 0) {
          push();
          fill(255);
          circle(boss.x - 15, boss.y, 20);
          circle(boss.x + 15, boss.y, 20);
          let angle = atan2(O.Po.getY() - boss.y, O.Po.getX() - boss.x);
          let ex = boss.x - 15 + cos(angle) * 5;
          let ey = boss.y + sin(angle) * 5;
          let ex2 = boss.x + 15 + cos(angle) * 5;
          let ey2 = boss.y + sin(angle) * 5;
          fill(0);
          let eye = 0
          if (State == 'attack1' || State == 'attack2')
            eye = 7
          else eye = 10
          circle(ex, ey, eye);
          circle(ex2, ey2, eye);
          fill(85, 22, 15);
          if (State != 'charge2') {
            arc(boss.x - 15, boss.y, 20, 20, 190, 10)
            arc(boss.x + 15, boss.y, 20, 20, 170, 350)
          }
          pop();
        }
      }

      break;

    case 'Options':
      push();
      rectMode(CENTER)
      fill(50, 150);
      rect(width / 2, height / 2, 550, 300);
      pop();
      image(Playy[21], width / 3, height / 3);
      image(Playy[22], width / 5, height / 5 * 3);
      image(Playy[23], width / 5 + 110, height / 5 * 3);
      Vo.update();
      Vo.draw();
      Options.Update();
      Options.Draw();
      break;

    case 'Credits':
      push();
      rectMode(CENTER);
      textAlign(CENTER);
      fill(50, 150);
      rect(width / 2, height / 2, 550, 300);
      fill(255)
      strokeWeight(5);
      stroke(255, 50, 50);
      textSize(30);
      text('Made by Sehun.Kim', width / 2, height / 20 * 5);
      textSize(25);
      text('Music', width / 2, height / 20 * 7.5);
      text('Special Thanks', width / 2, height / 20 * 13);
      text('SFX', width / 5, height / 20 * 13);
      text('Image', width / 5*4, height / 20 * 13);
      textSize(15);
      text('Biz Baz Studio - Action Time (spannende Musik)', width / 2, height / 20 * 8.5);
      text('Biz Baz Studio - controlled_distres', width / 2, height / 20 * 9.5);
      text('https://maoudamashii.jokersounds.com/list/game7.html',width / 2, height / 20 * 10.5)
      text('Rudy Castan', width / 2, height / 20 * 14)
      text('The Coding Train', width / 2, height / 20 * 15)
      text('Sehun.Kim', width / 5, height / 20 * 14);
      text('Sehun.Kim', width / 5*4, height / 20 * 14);
      pop();
      Credits.Update();
      Credits.Draw();
      break;
  }

  if (PState != 'dead')
    switch (State) {

      case 'none':
        Co = 0;
        c = random(2)
        if (round(boss.HP) == 0) {
          bossMove(300, 140, 300, 280, 5, 'dead', 2);
        } else
          bossMove(300, 140, 300, 150, 5, 'attack', 1);
        break;
      case 'appear':
        bossMove(300, -200, 300, 170, 1, 'attack', 1);
        Co = 0;
        break;

      case 'idel':
        Co += 1 / 15
        if (Co >= 35) {
          bossMove(300, 140, 300, 150, 5, 'shake', 1);
        }
        bossMove(300, 140, 300, 150, 5, 'idel2', 1);
        break;

      case 'idel2':
        bossMove(300, 150, 300, 140, 5, 'idel', 1);
        break;

      case 'attack':
        px = O.Po.x;
        bossMove(300, 170, O.Po.x, 100, 5, 'attack1', 1);
        break;

      case 'attack1':
        px = O.Po.x;
        bossMove(O.Po.x, 100, O.Po.x, 80, 10, 'attack2', 1);
        break;

      case 'attack2':
        Co += 1 / 15
        bossMove(px, 100, px, 280, 7, 'attack3', 2);
        break;

      case 'attack3':
        if (floor(Co) == 5) {
          if (round(boss.HP) % 2 == 0 || boss.HP == 5)
            bossMove(px, 280, 300, 140, 5, 'knight', 1);
          else bossMove(px, 280, px, -200, 5, 'charge1', 1)
        } else
          bossMove(px, 280, O.Po.x, 100, 5, 'attack1', 1);
        break;

      case 'knight':
        if (c <= 1) {
          knight.push(new enemy(random(600, 700), random(100, 300), -2));
        } else {
          knight.push(new enemy(random(0, -100), random(100, 300), 2));
        }
        Co += 1 / 15
        if (Co >= 25) {
          bossMove(300, 140, 300, 150, 5, 'idel2', 1);
        } else
          bossMove(300, 140, 300, 150, 5, 'knight2', 1);
        break;

      case 'knight2':
        bossMove(300, 150, 300, 140, 5, 'knight', 1);
        break;

      case 'shake':
        if (Co >= 40) {
          bossMove(300, 155, 300, 157, 15, 'shake2', 1);
        } else {
          bossMove(300, 140, 300, 160, 15, 'shake2', 1);
        }
        break;

      case 'shake2':
        Co += 1 / 15;
        if (round(Co) == 60) {
          if (t == 1) {
            boss.HP -= 1;
            t = 2;
          }
        }
        if (Co >= 65) {
          t = 1
          bossMove(300, 157, 300, 155, 15, 'none', 1);
          if (boss.HP <= 2) {
            sea = true;
          }
        }
        if (Co >= 40 && Co <= 60) {
          bullet.push(new bullets(random(0, 600), -110));
          bubble.push(new bullets(random(0, 600), -110));
          bossMove(300, 157, 300, 155, 15, 'shake', 1);
        } else {
          bossMove(300, 160, 300, 140, 15, 'shake', 1);
        }
        break;

      case 'charge1':
        Co += 1 / 15
        if (Co >= 32) {
          bossMove(300, -200, 300, 150, 5, 'idel2', 1);
        }
        if (Co <= 28)
          bossMove(-200, 130, 700, 130, 8, 'charge2', 2);
        break;

      case 'charge2':
        bossMove(700, 300, -200, 300, 8, 'charge1', 2);
        break;

      case 'dead':
        push();
        strokeWeight(5);
        image(BossP5, 300, 280);
        wow[4].show();
        wow[4].animate();
        textSize(50);
        text('Press R to restart', 300, 270);
        text('Press Z to MainMenu', 300, 330);
        pop();
        break;

      case 'restart':
        boss = {
          x: 300,
          y: -300,
          HP: 4,
          currentDistance: 0
        }
        State = 'appear'
        break;

    }
  for (let i = 0; i < knight.length; i++) {
    knight[i].knight();
    push()
    let tt = 1;
    if (round(Co % 2) == 1)
      tt = 0
    else tt = 1;
    fill(255, 200, 200, 50)
    image(Knightt[tt], knight[i].Po.getX(), knight[i].Po.getY())
    //rect(knight[i].Po.getX(), knight[i].Po.getY(), 10, 20);
    pop()
    if (knight[i].Po.getX() <= -200 || knight[i].Po.getX() >= 800)
      knight.splice(i, 1);
  }


  for (let i = 0; i < bullet.length; i++) {
    bullet[i].bullet();
    bubble[i].bullet();

    push();
    fill(255, 50)
    stroke(200);
    circle(bubble[i].Po.getX(), bubble[i].Po.getY(), random(5, 8));
    stroke(0);
    fill(105, 42, 25)
    circle(bullet[i].Po.getX(), bullet[i].Po.getY(), random(10, 15));
    pop();

    if (bullet[i].Po.getY() >= 450) {
      bullet.splice(i, 1);
      bubble.splice(i, 1);
    }
  }

  if (O.Hp <= 0)
    PState = 'dead'

  if (GameState != 'Game' && State != 'dead')
    MBGM.loop();
  else MBGM.stop();
  if (GameState == 'Game' && State != 'dead')
    BBGM.loop();
  else BBGM.stop();
  if (State == 'dead')
    VBGM.play();
  else VBGM.stop();


  if (GameState == 'Game') {
    if (PState != 'dead' && State != 'dead') {
      O.update();

      push();
      imageMode(CORNER)
      rectMode(CORNER)
      noStroke();
      image(hp2, 20, 10, 60, 60)
      fill(40, 49, 54);
      image(hp1, 20, 10, 60, 60);
      rect(41, 11, 37, map(O.Hp, 0, hp22, 60, 0))
      pop();
    }
  }

}



function bossMove(px, py, tx, ty, speed, state, Mode) {
  const distance = dist(px, py, tx, ty)
  const distance2 = dist(boss.x, boss.y, tx, ty)
  const t = boss.currentDistance / distance
  boss.x = px + t * (tx - px);
  boss.y = py + t * (ty - py);

  push();
  //fill(255,0);
  //rect(boss.x, boss.y, 80, 170);
  pop();

  let bossSpeed = ceil(distance2) * speed;
  let bossSpeedS = speed * 100;
  if (Mode == 1) {
    boss.currentDistance += bossSpeed * deltaTime / 1000;
  } else if (Mode == 2)
    boss.currentDistance += bossSpeedS * deltaTime / 1000;

  if (boss.currentDistance >= distance) {
    State = state;
    boss.currentDistance = 0;
  }

}


function pain(x, y, w, h) {
  return (x - w / 2) <= O.Po.getX() && (x + w / 2) >= O.Po.getX() && (y - h / 2) <= O.Po.getY() && (y + h / 2) >= O.Po.getY()
}

function In(x, y, w, h) {
  return (x - w / 2) <= mouseX && (x + w / 2) >= mouseX && (y - h / 2) <= mouseY && (y + h / 2) >= mouseY
}

function keyPressed() {
  if (State == 'dead' || PState == 'dead') {
    if (keyIsDown(82)) {
      State = 'restart'
      PState = 'restart'
    }
    if (keyIsDown(90)) {
      State = 0
      PState = 0
      GameState = 'Main'
    }
  }
  if (GameState == 'Story')
    if (story < 4)
      story += 1
  else {
    story = 1
    GameState = 'Game'
  }
}

function mouseReleased() {
  if (GameState == 'Story')
    if (story < 4)
      story += 1
  else {
    story = 1
    GameState = 'Game'
  }
}