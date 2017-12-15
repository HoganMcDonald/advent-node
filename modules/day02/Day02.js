const Utility = require('../tools/Utility.js');

module.exports = class Day02 {
  static loadSpreadsheet() {
    let spreadsheet = Utility.parseInput(2).split('\n');
    for (var i = 0; i < spreadsheet.length; i++) {
      let row = spreadsheet[i].split('\t').map(str => Number(str));
      spreadsheet[i] = row;
    }
    return spreadsheet;
  }

  static solve() {
    let spreadsheet = this.loadSpreadsheet();
    return spreadsheet;
  }

};
