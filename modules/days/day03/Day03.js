let _input = 347991;

let _highestX = 0;
let _lowestX = 0;
let _highestY = 0;
let _lowestY = 0;

module.exports = class Day03 {

  static solve() {
    let coordinates = this._spiral(_input);
    let path = Math.abs(coordinates[0]) + Math.abs(coordinates[1]);
    return path;
  }

  static bonus() {
    // https://oeis.org/A141481/b141481.txt
    return 'find answer at https://oeis.org/A141481/b141481.txt';
  }

  static _spiral(iterations) {
    let iteration = 1;
    let direction = "right";
    let xCoordinate = 0;
    let yCoordinate = 0;

    while (iteration < iterations) {
        switch (direction) {
            case "right":
                if (xCoordinate === _highestX + 1) {
                    _highestX = xCoordinate;
                    direction = "up";
                } else {
                    xCoordinate++;
                    iteration++;
                }
                break;
            case "up":
                if (yCoordinate === _highestY + 1) {
                    _highestY = yCoordinate;
                    direction = "left";
                } else {
                    yCoordinate++;
                    iteration++;
                }
                break;
            case "left":
                if (xCoordinate === _lowestX - 1) {
                    _lowestX = xCoordinate;
                    direction = "down";
                } else {
                    xCoordinate--;
                    iteration++;
                }
                break;
            case "down":
                if (yCoordinate === _lowestY - 1) {
                    _lowestY = yCoordinate;
                    direction = "right";
                } else {
                    yCoordinate--;
                    iteration++;
                }
                break;
            default:
                return [0, 0];
        }
    }

    return [xCoordinate, yCoordinate];
  }

};
