"use strict";
var getSymbolCreator = require("symbol-creator").getSymbolCreator;

var createSymbol = getSymbolCreator("symbiote");

module.exports = {
  getActionCreator: createSymbol("action function for actions list")
};
