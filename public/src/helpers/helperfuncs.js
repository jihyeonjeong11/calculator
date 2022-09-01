import {operandSymbols} from '../data/symbols'

/**
 * @param {number} index
 * @param {number} length
 * @return {string}
 */
export const buildGridTemplate = (index, length) => {
  return new Array(length)
    .fill(1)
    .map((item, idx) => (idx === index ? "2fr " : "1fr "))
    .join("");
};






