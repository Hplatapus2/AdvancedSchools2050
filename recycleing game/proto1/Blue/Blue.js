/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blue extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blue", "./Blue/costumes/blue.png", { x: 134, y: 187 }),
    ];

    this.sounds = [];

    this.triggers = [];
  }
}