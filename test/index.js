import test from "ava";
import symbioteSymbol from "../index";

test("getActionCreator should be", t => {
  t.true(
    typeof symbioteSymbol.getActionCreator === "symbol" ||
      typeof symbioteSymbol.getActionCreator === "string"
  );
});
