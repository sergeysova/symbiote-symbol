'use strict'

function getSymbolCreator() {
  return typeof Symbol === 'function'
    ? Symbol
    : function Symbol(name) { return '@@redux-symbiote/' + name };
}

var createSymbol = getSymbolCreator()

module.exports = {
  getActionCreator: createSymbol('action function for actions list'),
};
