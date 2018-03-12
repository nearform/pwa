const h = require('choo/html')

function head (...components) {
  return (state, emit) => h`<head>${components.map(component => component(state, emit))}</head>`
}

module.exports = head
