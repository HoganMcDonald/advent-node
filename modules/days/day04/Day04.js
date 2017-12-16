const Utility = require('../../tools/Utility.js');

module.exports = class Day04 {

  static _loadPassphrases() {
    let passphrases = Utility.parseInput(4).split('\n');
    passphrases.pop();
    return passphrases;
  }

  static solve() {
    let passphrases = this._loadPassphrases();

    return passphrases.reduce( (accumulator, passphrase) => {
  		let passwords = passphrase.split(' ');
  		return accumulator + passwords.reduce( ( accumulator, password, currentIndex, array ) => {
        return accumulator && array.indexOf(password) == currentIndex
      })
    }, 0 );
  }

  static bonus() {
    let passphrases = this._loadPassphrases();

    return passphrases.reduce( (s, passphrase) => {
  		let passwords = passphrase.split(' ').map( a => ( a.split('').sort().join('') ) );
  		return s + passwords.reduce( ( accumulator, password, currentIndex, array ) => {
        return accumulator && array.indexOf(password) == currentIndex
      })
    }, 0 );
  }
};
