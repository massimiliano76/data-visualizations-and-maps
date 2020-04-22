const chart = document.getElementById('myChart')

let headers = []

let casesLeft = []

mapDataPoints.forEach(function (point) {
  headers.push(`${point.province_or_state} ${point.country_or_region}`)
  const casesLeftNumber = Number(point.confirmed) - (Number(point.deaths) + Number(point.recovered))
  if (casesLeftNumber < 0) {
    casesLeft.push('0')
  } else {
    casesLeft.push(casesLeftNumber.toString())
  }
})

const myChart = new Chart(chart, {
  type: 'horizontalBar',
  data: {
    labels: headers,
    datasets: [{
      label: 'Cases Left',
      data: casesLeft,
      backgroundColor: 'rgb(205, 79, 71)',
      borderWidth: 1,
      datalabels: {
        color: '#4e4d4d',
        anchor: 'end',
        align: 'end'
      }
    }]
  },
  options: {
    scales: {
      xAxes: [{ 
        position: 'top' 
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})