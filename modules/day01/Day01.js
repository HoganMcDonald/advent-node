const Utility = require('../tools/Utility.js');

module.exports = class Day01 {

  static solve() {
    let result = 0;
    let captcha = Utility.parseInput(1).split('').map( str => Number(str));
    captcha.pop();

    for (let i = 0; i <= captcha.length - 1; i++) {
      let num = captcha[i];
      let nextNum = (i < captcha.length - 1) ? captcha[i + 1] : captcha[0];
      if (num === nextNum) {
        result += num;
      }
    }

    return result;
  }

};
