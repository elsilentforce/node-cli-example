const { createTableFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

createTableFile(argv.base, argv.list, argv.iterations)
  .then( fileName => console.log(`File: ${ fileName } created.`) )
  .catch( err => console.log(err) )