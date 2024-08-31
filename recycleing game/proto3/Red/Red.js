/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Red extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("red", "./Red/costumes/red.png", { x: 126.5, y: 187 }),
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
