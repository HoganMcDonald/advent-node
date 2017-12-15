const fs = require('fs');

module.exports = class Utility {

  static parseInput(day) {
    day = (day < 10) ? '0' + day : String(day);
    const FILE_PATH = `modules/day${day}/day${day}.txt`;

    return fs.readFileSync(FILE_PATH, 'utf-8');
  }

}
