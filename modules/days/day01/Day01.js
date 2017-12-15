const Utility = require('../../tools/Utility.js');

module.exports = class Day01 {

  static loadCaptcha() {
    let captcha = Utility.parseInput(1).split('').map( str => Number(str));
    captcha.pop();
    return captcha;
  }

  static solve() {
    let result = 0;
    let captcha = this.loadCaptcha();

    for (let i = 0; i <= captcha.length - 1; i++) {
      let num = captcha[i];
      let nextNum = (i < captcha.length - 1 ) ? captcha[i + 1] : captcha[0];
      if (num === nextNum) {
        result += num;
      }
    }

    return result;
  }

  static bonus() {
    let result = 0;
    let captcha = this.loadCaptcha();

    let distance = captcha.length / 2;

    for (let i = 0; i <= captcha.length - 1; i++) {
      let num = captcha[i];
      let partnerNum = (i + distance >= captcha.length) ? captcha[i + distance - captcha.length] : captcha[i + distance];
      if (num === partnerNum) {
        result += num;
      }
    }

    return result;
  }

};
