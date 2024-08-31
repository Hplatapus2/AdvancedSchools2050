/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Can extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("can", "./Can/costumes/can.svg", { x: 55.5, y: 55.5 }),
      new Costume("apple", "./Can/costumes/apple.jpg", { x: 140, y: 129 }),
      new Costume("banana", "./Can/costumes/banana.jpg", { x: 174, y: 87 }),
      new Costume("battery", "./Can/costumes/battery.jpg", { x: 75, y: 103 }),
      new Costume("bin bag", "./Can/costumes/bin bag.jpg", {
        x: 191.5,
        y: 191.5,
      }),
      new Costume("bottle", "./Can/costumes/bottle.jpg", { x: 179, y: 179 }),
      new Costume("box", "./Can/costumes/box.jpg", { x: 314, y: 286 }),
      new Costume("cardboard", "./Can/costumes/cardboard.jpg", {
        x: 167,
        y: 167,
      }),
      new Costume("cup", "./Can/costumes/cup.jpg", { x: 138, y: 142 }),
      new Costume("doritos", "./Can/costumes/doritos.jpg", { x: 316, y: 316 }),
      new Costume("grass", "./Can/costumes/grass.jpg", { x: 187, y: 131 }),
      new Costume("jar", "./Can/costumes/jar.jpg", { x: 104, y: 156 }),
      new Costume(
        "keyboard and mouse",
        "./Can/costumes/keyboard and mouse.jpg",
        { x: 223, y: 223 }
      ),
      new Costume("leaf", "./Can/costumes/leaf.png", { x: 319, y: 283 }),
      new Costume("paper", "./Can/costumes/paper.jpg", { x: 122, y: 114 }),
      new Costume("popper", "./Can/costumes/popper.jpg", { x: 126, y: 133 }),
      new Costume("printer", "./Can/costumes/printer.jpg", {
        x: 199.5,
        y: 199.5,
      }),
      new Costume("smiths", "./Can/costumes/smiths.jpg", { x: 97, y: 97 }),
      new Costume("toner", "./Can/costumes/toner.jpg", { x: 158, y: 158 }),
      new Costume("vase", "./Can/costumes/vase.jpg", { x: 138, y: 138 }),
      new Costume("costume1", "./Can/costumes/costume1.svg", {
        x: 190.98299113627013,
        y: 119.7748787778283,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    while (!(this.toString(this.stage.vars.finish) === "true")) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.size = 25;
    this.stage.vars.finish = "false";
    this.stage.vars.score = 0;
    this.costume = "can";
    while (true) {
      if (
        this.touching(this.sprites["Blue"].andClones()) &&
        this.costumeNumber === 1
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Green"].andClones()) &&
        this.costumeNumber === 2
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Green"].andClones()) &&
        this.costumeNumber === 3
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Black"].andClones()) &&
        this.costumeNumber === 4
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Red"].andClones()) &&
        this.costumeNumber === 5
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Blue"].andClones()) &&
        this.costumeNumber === 6
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Yellow"].andClones()) &&
        this.costumeNumber === 7
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Yellow"].andClones()) &&
        this.costumeNumber === 8
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Pink"].andClones()) &&
        this.costumeNumber === 9
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Red"].andClones()) &&
        this.costumeNumber === 10
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Green"].andClones()) &&
        this.costumeNumber === 11
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Pink"].andClones()) &&
        this.costumeNumber === 12
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Pink"].andClones()) &&
        this.costumeNumber === 12
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Black"].andClones()) &&
        this.costumeNumber === 13
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Green"].andClones()) &&
        this.costumeNumber === 14
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Yellow"].andClones()) &&
        this.costumeNumber === 15
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Blue"].andClones()) &&
        this.costumeNumber === 16
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Black"].andClones()) &&
        this.costumeNumber === 17
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Red"].andClones()) &&
        this.costumeNumber === 18
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Black"].andClones()) &&
        this.costumeNumber === 19
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
      }
      if (
        this.touching(this.sprites["Pink"].andClones()) &&
        this.costumeNumber === 20
      ) {
        this.stage.vars.score++;
        this.costumeNumber++;
        this.stage.vars.finish = "true";
        this.size = 100;
        this.goto(0, 0);
      }
      yield;
    }
  }
}
