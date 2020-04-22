const fs = require('fs')

fs.readFile('./03-21-2020.csv.txt', 'utf8', (err, data) => {
  if (err) throw err
  const rows = data.split(/[\r\n]+/)
  const headers = rows[0].split(',')
  const final = 'const mapHeaders = ' + JSON.stringify(headers)
  // console.log(final)
  
  fs.writeFile('./map-headers.js', final, 'utf8', (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})