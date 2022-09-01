interface CounterState {
  value: string
  isCalculated ?: boolean
  prevOperand: string
  prevCalculation : string
}

interface SymbolTypes {
  [key: string] : string;
}