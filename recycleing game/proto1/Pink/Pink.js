/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pink extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pink", "./Pink/costumes/pink.png", { x: 140, y: 187 }),
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
