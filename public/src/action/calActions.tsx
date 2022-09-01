
import { operandSymbols } from "../data/symbols"

// 프로젝트 열 해할 것  순서

// 노말라이즈, reset CSS   부터

// // body {
//   padding: 0;
//   margin: 0;
//   background: linear-gradient(to right, #00AAFF, #00FF6C)
  
// }
 

// 계산기 기능 명세

// 첫 state는 0

// 처음으로 입력받는것은 숫자

// operand의 경우, 보이지 않게 함.

// operand 입력 이후 바로 operand일때, 입력되어선 안됨

// operand가 하나 이상 일경우, 먼저 계산하고 계산된 값을 보여준다.

// 

// initialValue가 0아 아니라 ''이어도 괘낯ㄴㅎ을듯

// const initialState: CounterState = {
//     value: '0',
//     isCalculated: false,
//     result: '0',
//     calculation: ''
//   }

//prevOperand가 찾기 힘들다면, switch 문을 늘려보자

// 만약 operand가 존재한다면, 먼저 계산한 뒤 action.payload를 붙여 반환
// OPERAND가 없다면, 그냥 action.payload를 붙여서 반환
const calculate = (prevCal: string, prevOp: string, currVal: string,) => {

  // const result = eval(str1 +prevOperand+ str2)
  
  
  return   JSON.stringify(eval(prevCal + prevOp + currVal))
  
}

export const add_action =  (state: CounterState,action: any) => {
  let resultState = {
    ...state,
    value: state.value + action.payload
  }
  return resultState
}

export const operate_action = (state:CounterState, action: any) => {
  console.log(state.value.slice(-1))
  if(!state.value || state.value.slice(-1) === '.') return state
  let resultState = {
    ...state,
    value: '',
    prevCalculation: state.value,
    prevOperand: operandSymbols[action.payload],

  }
  return resultState
}

export const operate_eval_action = (state:CounterState, action: any) => {

  // value가 없다면, prevOperand만 바꾼다
  let resultState;
  // 만약 last input이 operand라면, prevCalculation을 넣어줘야함
  resultState =state.value ?
  {
    ...state,
    value:  calculate(state.prevCalculation, state.prevOperand, state.value),
    prevCalculation: '',
    prevOperand: ''
  } :
  {
    ...state,

    prevOperand: action.payload
  } 
  return resultState
}

export const del_action = (state:CounterState) => {
  if(!state.value) return state
  let resultState;
  resultState = {
    ...state,
    value: state.value.slice(0,-1)

  } 
  return resultState
}

//str.slice(0, -1);
//str.substring(0, str.length - 1); remove last string

export const eval_action = (state:CounterState) => {
  if(!state.value || !state.prevOperand || !state.prevCalculation) return state
  // value가 없다면, prevOperand만 바꾼다
  let resultState;
  resultState = {
    ...state,
    value:  calculate(state.prevCalculation, state.prevOperand, state.value),
    prevCalculation: '',
    prevOperand: ''
  } 
  return resultState
}

export const decimal_action = (state:CounterState) => {
  let resultState;
  resultState = {
    ...state,
    value:  state.value ? state.value + '.' : '0.'
  } 
  return resultState
}


// export const computeString = (state: CounterState, action: any) => {
//   let resultState = state
//   const operandExists = didOperandExist(state.prevOperand)
//   switch(action.payload){
//     default:
//       resultState = {
//         value: operandExists ? state.value + action.payload : state.value + action.payload,
//         calculation: operandExists ? state.calculation : state.calculation + action.payload,
//         nextCalculation : operandExists ? state.nextCalculation + action.payload :  state.nextCalculation, 
//         prevOperand : state.prevOperand
//       }
//       break;
//     case '+':
//       resultState = {
//         value: operandExists ? calculate(state.calculation, state.nextCalculation, state.prevOperand, true) : '',
//         calculation: operandExists ? state.calculation : state.calculation,
//         nextCalculation: '',
//         prevOperand: operandExists ? ' ' : action.payload
//       }
//       break;


//   }

//   return resultState;
// };
