import moment from 'moment'

const getGreetingTime = () => {
  let g = null
  const splitEvening = 18 // 24hr time to split the evening
  const currentHour = parseFloat(moment().hour())

  if (currentHour >= splitEvening) {
    g = 'Bonsoir'
  } else {
    g = 'Bonjour'
  }

  return g
}

export default getGreetingTime
