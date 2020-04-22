const barChartButton = document.querySelector('.covid__bar-chart-button')

const mapButton = document.querySelector('.covid__map-button')

const map = document.getElementById('mapid')

const barChart = document.getElementById('barChart')

barChartButton.addEventListener('click', function (event) {
    barChart.setAttribute('data-shown', 'yes')
    map.setAttribute('data-shown', 'no')
}, false)

mapButton.addEventListener('click', function (event) {
    barChart.setAttribute('data-shown', 'no')
    map.setAttribute('data-shown', 'yes')
}, false)