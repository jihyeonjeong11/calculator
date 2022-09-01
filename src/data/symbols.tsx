export const calKeys = [
  [
    { val: "ac", big: true, type: "reset" },
    { val: "del", type: "del" },
    { val: "+", color: "rgb(243,174,61)", type: "operand" },
  ],
  [
    { val: "1", type: "num" },
    { val: "2", type: "num" },
    { val: "3", type: "num" },
    { val: "×", color: "rgb(243,174,61)", type: "operand" },
  ],
  [
    { val: "4", type: "num" },
    { val: "5", type: "num" },
    { val: "6", type: "num" },
    { val: "÷", color: "rgb(243,174,61)", type: "operand" },
  ],
  [
    { val: "7", type: "num" },
    { val: "8", type: "num" },
    { val: "9", type: "num" },
    { val: "-", color: "rgb(243,174,61)", type: "operand" },
  ],
  [
    { val: ".", type: "." },
    { val: "0", type: "num" },
    { val: "=", color: "rgb(243,174,61)", big: true, type: "eval" },
  ],
];

export const operandSymbols: SymbolTypes = {
  "+": "+",
  "-": "-",
  "×": "*",
  "÷": "/",
};
