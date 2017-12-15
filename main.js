// import modules
const fs = require('fs');
const path = require('path');

// returns array of directories
const getDirectories = srcPath => fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
const daysComplete = getDirectories('./modules/days').length;

const days = {};

for (let i = 1; i <= daysComplete; i++) {
  let dayNumber = (i < 10) ? '0' + i : String(i);
  days[`Day${dayNumber}`] = require(`./modules/days/day${dayNumber}/Day${dayNumber}.js`);
}

for (let day in days) {
  let part1 = days[day].solve();
  let part2 = days[day].bonus();
  console.log(`${day}\n   solution: ${part1}\n   bonus: ${part2}\n`);
}
