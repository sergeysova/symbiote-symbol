const getSymbolCreator = () => typeof Symbol === 'function' ? Symbol : (name) => `@@redux-symbiote/${name}`

const createSymbol = getSymbolCreator()


module.exports = {
  getActionCreator: createSymbol('action function for actions list'),
}
