const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')

setInterval(() => {
  const day = new Date()

const hh = day.getHours() * 30

const mm = day.getMinutes() * 6

const ss = day.getSeconds() * 6


hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`
mn.style.transform = `rotateZ(${mm}deg)`

sc.style.transform = `rotateZ(${ss}deg)`
})
