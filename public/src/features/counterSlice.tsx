import {createSlice, current} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {add_action, eval_action, operate_action, operate_eval_action, del_action, decimal_action} from '../action/calActions';

// reduxjs toolkit으로 구현한 계산기 redux



const initialState: CounterState = {
  value: '',
  isCalculated: false,
  prevOperand: '',
  prevCalculation: ''
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state: CounterState, action:PayloadAction<string>) => {

      // 맨 처음 스트링이 '0' 일때는 0을 뺴고 넣어줘야 한다.
      //state = computeString(state, action)
      return  add_action(current(state), action)
    },
    operate: (state, action:PayloadAction<string>) => {
      return state.prevOperand && state.value ? 
        operate_eval_action(current(state), action) 
        : 
        operate_action(current(state), action)
    },
    reset : () => {
      return initialState
    },
    evaluate: (state) =>  {
      return eval_action(current(state))
    },
    del: (state) => {
      return del_action(current(state))
    },
    decimal: (state) => {
      return decimal_action(current(state))
    }
  }
})

export const { add, operate, evaluate, reset, del, decimal } = counterSlice.actions

export default counterSlice.reducer
