import curry from "./curry.js";
import flat from "./flat.js";
import mapL from "../Lazy/mapLazy.js";

export default curry(function flatMap(f, iter) {
  return flat(mapL(f, iter));
});