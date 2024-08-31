/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Black extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("black", "./Black/costumes/black.png", { x: 137.5, y: 187 }),
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
