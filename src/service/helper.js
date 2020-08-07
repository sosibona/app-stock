export function isPositiveInteger (value) {
  return +value <= 0 || +value % 1 !== 0
}

export function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
