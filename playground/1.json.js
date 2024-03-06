  const fs = require('fs')
  
  const book = {
    title : 'To Kill a mocking bird',
    author : 'Slim Shady'
  }

  const bookJSON = JSON.stringify(book)
  console.log(bookJSON);

 const parseData =  JSON.parse(bookJSON);
 console.log(parseData.author);


 fs.writeFileSync('1-json.json',bookJSON)