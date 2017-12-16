const Utility = require('../../tools/Utility.js');

module.exports = class Day05 {

  static _loadList() {
    let list = Utility.parseInput(5).split('\n').map(str=> Number(str));
    list.pop();
    return list;
  }

  static solve() {
    let list = this._loadList();

    let currentIndex = 0;
    let jumps = 0;
    let jump = list[currentIndex];

    for (var i = 0; i < list.length; i += jump) {
      jumps++;
      jump = list[i];
      list[i]++
    }

    return jumps;
  }

  static bonus() {
    let list = this._loadList();

    let currentIndex = 0;
    let jumps = 0;
    let jump = list[currentIndex];

    while (typeof list[currentIndex] !== 'undefined') {
      if (list[currentIndex] >= 3) {
        currentIndex += list[currentIndex]--;
        jumps++;
      } else {
        currentIndex += list[currentIndex]++;
        jumps++;
      }
    }

    return jumps;
  }

};
