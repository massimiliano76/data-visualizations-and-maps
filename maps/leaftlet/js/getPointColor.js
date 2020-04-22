/**
 * Returns a color depending on number of confirmed cases.
 * @param {string} confirmedCases - Number of confirmed cases.
 */
function getPointColor (confirmedCases) {
  const confirmed = Number(confirmedCases)
  if (confirmed >= 0 && confirmed < 10) {
    return '#ffbfbf'
  } else if (confirmed > 9 && confirmed < 50) {
    return '#ffb3b3'
  } else if (confirmed > 49 && confirmed < 100) {
    return '#ffa6a6'
  } else if (confirmed > 99 && confirmed < 250) {
    return '#ff9999'
  } else if (confirmed > 249 && confirmed < 500) {
    return '#ff8c8c'
  } else if (confirmed > 499 && confirmed < 1000) {
    return '#ff8080'
  } else if (confirmed > 999 && confirmed < 2500) {
    return '#ff7373'
  } else if (confirmed > 2499 && confirmed < 5000) {
    return '#ff6666'
  } else if (confirmed > 4999 && confirmed < 10000) {
    return '#ff5959'
  } else if (confirmed > 9999 && confirmed < 25000) {
    return '#ff4d4d'
  } else if (confirmed > 24999 && confirmed < 50000) {
    return '#ff4040'
  } else if (confirmed > 49999 && confirmed < 100000) {
    return '#ff3333'
  } else if (confirmed > 99999 && confirmed < 250000) {
    return '#ff2626'
  } else if (confirmed > 249999 && confirmed < 500000) {
    return '#ff1919'
  } else if (confirmed > 499999 && confirmed < 1000000) {
    return '#ff0d0d'
  } else if (confirmed > 999999) {
    return '#ff0000'
  }
  
  return '#ffbfbf'
}