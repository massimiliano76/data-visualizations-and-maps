const fs = require('fs')

fs.readFile('./03-21-2020.csv.txt', 'utf8', (err, data) => {
  if (err) throw err
  const rows = data.split(/[\r\n]+/)
  
  let dataPoints = []
  
  for (var i = 1; i < rows.length - 1; i++) {
    
    if (rows[i].indexOf('"') !== -1) {
      const prov_state = rows[i].substring(0, rows[i].indexOf(',')) 
      const firstCut = rows[i].substring(rows[i].indexOf('"') + 1)
      // console.log(prov_state)
      const coun_region = firstCut.substring(0, firstCut.indexOf('"'))
      // console.log(coun_region)
      const endOfRow = firstCut.substring(firstCut.indexOf('"') + 2)
      const endOfRowData = endOfRow.split(',')
      // console.log(endOfRowData)
      let dataPoint = {
        province_or_state: prov_state,
        country_or_region: coun_region,
        last_update: endOfRowData[0],
        confirmed: endOfRowData[1],
        deaths: endOfRowData[2],
        recovered: endOfRowData[3],
        latitude: endOfRowData[4],
        longitude: endOfRowData[5]
      }
      dataPoints.push(dataPoint)
    } else {
      const rowData = rows[i].split(',')
      let dataPoint = {
        province_or_state: rowData[0],
        country_or_region: rowData[1],
        last_update: rowData[2],
        confirmed: rowData[3],
        deaths: rowData[4],
        recovered: rowData[5],
        latitude: rowData[6],
        longitude: rowData[7]
      }
      dataPoints.push(dataPoint)
    }
    
  }
  
  // console.log(dataPoints)
  const final = 'const mapDataPoints = ' + JSON.stringify(dataPoints)
  
  fs.writeFile('./map-data-points.js', final, 'utf8', (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})