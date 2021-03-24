const fs = require('fs')

if (process.argv.length === 2) {
  console.log('node cp.js: missing file operand\nTry node cp.js \'file\' \'copy\' ')
}

if (process.argv.length === 3) {
  console.log(`node cp.js: missing destination file operand after '${process.argv[2]}'`)
}

if (process.argv.length === 4) {
  if (fs.lstatSync(process.argv[3]).isDirectory()) {
    fs.copyFileSync(process.argv[2], process.argv[3] + '/' + process.argv[2])
    //console.log(`\'${process.argv[2]}\' -> \'${process.argv[3] + '/' + process.argv[2]}\'`)
  } else {
    fs.copyFileSync(process.argv[2], process.argv[3])
  }
} else if (process.argv.length > 4 && fs.lstatSync(process.argv[process.argv.length - 1]).isDirectory()) {
  for (let i = 2; i < process.argv.length - 1; i++) {
    fs.copyFileSync(process.argv[i], process.argv[process.argv.length - 1] + '/' + process.argv[i])
    //console.log(`\'${process.argv[2]}\' -> \'${process.argv[3] + '/' + process.argv[2]}\'`)
  }
}