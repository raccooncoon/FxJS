import curry from "./curry.js";
import go from "./go.js";
import object from "./object.js";
import entriesL from "../Lazy/entriesLazy.js";
import rejectL from "../Lazy/rejectLazy.js";

export default curry(function omitBy(f, obj) {
  return go(obj, entriesL, rejectL(f), object);
});