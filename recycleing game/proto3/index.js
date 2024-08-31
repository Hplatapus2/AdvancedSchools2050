import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Can from "./Can/Can.js";
import Yellow from "./Yellow/Yellow.js";
import Black from "./Black/Black.js";
import Blue from "./Blue/Blue.js";
import Green from "./Green/Green.js";
import Pink from "./Pink/Pink.js";
import Red from "./Red/Red.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Can: new Can({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: true,
    layerOrder: 7,
  }),
  Yellow: new Yellow({
    x: -37,
    y: -103,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 2,
  }),
  Black: new Black({
    x: 104,
    y: -101,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 4,
  }),
  Blue: new Blue({
    x: -114,
    y: -101,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 6,
  }),
  Green: new Green({
    x: 36,
    y: -102,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 3,
  }),
  Pink: new Pink({
    x: 175,
    y: -98,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 5,
  }),
  Red: new Red({
    x: -187,
    y: -101,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
