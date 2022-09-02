/// <reference types="react-scripts" />
interface CounterState {
  value: string
  isCalculated ?: boolean
  prevOperand: string
  prevCalculation : string
}

interface SymbolTypes {
  [key: string] : string;
}

interface ChildProps {
  val: string;
  big?: boolean;
  color?: string;
  type: string;
}

interface KeyProps {
  val: string;
  big?: boolean;
  color?: string;
}