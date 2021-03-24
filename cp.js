const fs = require('fs')

if (process.argv.length === 2) {
  console.log('node cp.js: missing file operand\nTry node cp.js \'file\' \'copy\' ')
  process.exit(1)
}

if (process.argv.length === 3) {
  console.log(`node cp.js: missing destination file operand after '${process.argv[2]}'`)
  process.exit(1)
}

if (process.argv.length === 4) {

  if (fs.existsSync(process.argv[3]) && fs.lstatSync(process.argv[3]).isDirectory()) {
    if (process.argv[3] === '.') {
      console.log(`node cp.js: '${process.argv[2]}' and '${process.argv[3] + '/' + process.argv[2]}' are the same file`)
      process.exit(1)
    } else {
      fs.copyFileSync(process.argv[2], process.argv[3] + '/' + process.argv[2])
      process.exit(0)
      //console.log(`\'${process.argv[2]}\' -> \'${process.argv[3] + '/' + process.argv[2]}\'`)
    }
  } else {
    fs.copyFileSync(process.argv[2], process.argv[3])
    process.exit(0)
  }
}

if (process.argv.length > 4 && fs.existsSync(process.argv[process.argv.length - 1]) && fs.lstatSync(process.argv[process.argv.length - 1]).isDirectory()) {
  for (let i = 2; i < process.argv.length - 1; i++) {
    if (process.argv[process.argv.length - 1] === '.') {
      console.log(`node cp.js: '${process.argv[i]}' and '${process.argv[process.argv.length - 1] + '/' + process.argv[i]}' are the same file`)
    } else {
      fs.copyFileSync(process.argv[i], process.argv[process.argv.length - 1] + '/' + process.argv[i])
      //console.log(`\'${process.argv[2]}\' -> \'${process.argv[3] + '/' + process.argv[2]}\'`)
    }
  }
} else {
  console.log(`node cp.js: target '${process.argv[process.argv.length - 1]}' is not a directory`)
  process.exit(1)
}