export function isPositiveInteger (value) {
  return +value <= 0 || +value % 1 !== 0
}