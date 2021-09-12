fs = require('fs');

const createTableFile = async (base, displayList) => {
  try{
    const fileName = `${ base }-table.txt`;
    let output = ''
    
    // File headers
    output += ('===============\n');
    output += (`${ base } Table\n`);
    output += ('===============\n');
    
    for(i = 1; i <= 10; i++){
      output += `${ base } X ${ i } = ${ base * i }\n`
    }
    
    // Shows output just with the flag is enabled
    if (displayList) console.log(output);
    
    fs.writeFileSync(fileName, output);
  
    return fileName;
  }
  catch(err){
    throw err;
  }

}

module.exports = {
  createTableFile
}