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
    let result = 0;
    let spreadsheet = this.loadSpreadsheet();

    for (var i = 0; i < spreadsheet.length; i++) {
      let row = spreadsheet[i];
      let largestValue = row[0];
      let smallestValue = row[0];
      for (var j = 1; j < row.length; j++) {
        row[i]
        largestValue = (row[j] > largestValue) ? row[j] : largestValue;
        smallestValue = (row[j] < smallestValue) ? row[j] : smallestValue;
      }
      result += largestValue - smallestValue;
    }

    return result;
  }

};
