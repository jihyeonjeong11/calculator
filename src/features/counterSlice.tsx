import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// reduxjs toolkit으로 구현한 계산기 redux

export interface CounterState {
  value: string
  isCalculated : boolean
}

const initialState: CounterState = {
  value: '0',
  isCalculated: false
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action:PayloadAction<string>) => {

      // 맨 처음 스트링이 '0' 일때는 0을 뺴고 넣어줘야 한다.

      
        switch(action.payload){
          default:  
            (state.value || state.isCalculated) === initialState.value ? state.value = action.payload : state.value+= action.payload
            state.isCalculated = false
            break
          case 'ac':
            state.value = "0"
            break
          case 'del':
            state.value = state.value.slice(0,-1)
            break
          case '=':
            state.value = eval(state.value)
            state.isCalculated = true
            break

        

      }
    },
    decrement: (state) => {
      return
    },
    incrementByAmount: (state, action: PayloadAction<number>) =>  {
      state.value += action.payload
    }
  }
})

export const { add, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer