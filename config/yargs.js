const argv = require('yargs')
  .options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    desc: 'Base number to generate the table'
  })
  .options('l', {
    alias: 'list',
    type: 'boolean',
    demandOption: false,
    default: false,
    desc: 'List the operation in command line'
  })
  .check( (argv, options) => {
    if( isNaN(argv.base) ){
      throw 'Base must be a number'
    }
    return true;
  })
  .argv;

module.exports = argv