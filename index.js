"use strict";
function createSymbolCreator() {
  return typeof Symbol === "function"
    ? Symbol
    : function Symbol(name) {
        return (
          "@@symbiote/" +
          name +
          "-" +
          Math.floor(Math.random() * 1000000).toString(36)
        );
      };
}

var createSymbol = createSymbolCreator();

module.exports = {
  getActionCreator: createSymbol("action function for actions list")
};
