const Utility = require('../../tools/Utility.js');

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

  static sort_asc(array){
    return array.sort(function(a, b){
        return b - a;
    });
}

  static bonus() {
    let spreadsheet = this.loadSpreadsheet();

    let result = spreadsheet
        .map(row => row.sort(function(a, b){return b - a}))
        .map(row => row.map(function(number1){
          return row.map(function(number2){
              if(number1 % number2 === 0){
                  if(number1 / number2 > 1){
                      return number1 / number2;
                  } else return 0;
              } else return 0;
          })
        }))
        .map(row => row.map(function(array2){
          return array2.reduce((total, num)=> total + num);
        }))
        .map(row => row.reduce((total, num)=> total + num))
        .reduce((a, b)=> a + b);

    return result;
  }

};
