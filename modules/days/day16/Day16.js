const Utility = require('../../tools/Utility.js');

module.exports = class Day16 {

  static _loadMoves() {
    let moves = Utility.parseInput(16).split('\n');
    moves.pop();
    return moves.join().split(',');
  }

  static _spin(iterations, programs) {
    for (var i = 0; i < iterations; i++) {
      programs.splice(0, 0, programs.splice(programs.length - 1, 1)[0]);
    }
    return programs;
  }

  static solve() {
    let moves = this._loadMoves();
    const POSITIONS = 'abcdefghijklmnop';

    let programs = 'abcdefghijklmnop'.split('');

    for (var i = 0; i < moves.length; i++) {
      let move = moves[i]
      switch (move.charAt(0)) {
        case 's':
          programs = this._spin(move.charAt(1), programs);
          break;
        case 'x':
          let firstPosition = POSITIONS.indexOf(move.charAt(1));
          let secondPosition = POSITIONS.indexOf(move.charAt(3));
          programs.splice(firstPosition, 0, programs.splice(secondPosition, 1)[0]);
          break;
        case 'p':
          let firstLetter = programs.indexOf(move.charAt(1));
          let secondLetter = programs.indexOf(move.charAt(3));
          programs.splice(firstLetter, 0, programs.splice(secondLetter, 1)[0]);
          break;
        default:
          break;
      }
    }
    return programs.join('');
  }

  static bonus() {
    return 0;
  }

};
