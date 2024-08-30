/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Yellow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("yellow", "./Yellow/costumes/yellow.png", { x: 124, y: 187 }),
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
