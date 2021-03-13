const fs = require('fs')

fs.readFile('./demo.js', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let hasFunction = false;
  let functionLength = 0;
  const result = String(data)
  const linesArr = result.split("\n")
  let linesAndWords = {}

  linesArr.map(line => {
    linesAndWords[line] = line.split(" ");
  })
  Object.keys(linesAndWords).forEach(objKey => {
    linesAndWords[objKey].forEach(word => {
      if(word === "function"){
        hasFunction = true; 
        functionLength++;
      }
    });
  })

  console.log(hasFunction)
  console.log(functionLength)
})