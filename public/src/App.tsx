import React, { SyntheticEvent } from "react";
import "./App.css";
import type { RootState } from "./store/index";
import { useSelector, useDispatch } from "react-redux";
import { operate, add, reset, evaluate, del, decimal } from "./features/counterSlice";

import Grid from "./components/Grid";
import {calKeys} from './data/symbols';
import ResultDisplay from "./components/ResultDisplay";

// type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
// type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>
// type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>

interface KeyProps {
  val: string;
  big?: boolean;
  color?:string;
}

const data : KeyProps[][] = calKeys;







const App = () => {
  const dispatch = useDispatch();
  const addDispatch = (val: string) => dispatch(add(val));
  const operateDispatch = (val: string) => dispatch(operate(val))
  const resetDispatch = () => dispatch(reset())
  const evalDispatch = () => dispatch(evaluate())
  const delDispatch = () => dispatch(del())
  const decimalDispatch = () => dispatch(decimal())
  const onClickCal = (event: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
    let target = (event.target as HTMLButtonElement )
    clickHandler(target)
  }; 

  const clickHandler = (target: HTMLButtonElement): void => {
    switch(target.id){
      default:
        break
      case 'num':
        addDispatch(target.value)
        break;
      case 'operand':
        operateDispatch(target.value)
        break;
      case 'reset':
        resetDispatch()
        break;
      case 'eval':
        evalDispatch()
        break;
      case 'del':
        delDispatch()
        break;
      case '.':
        decimalDispatch()

    }
    
  }
   return (
    <main>
      <div className="cal-wrapper">
      <div className="cal-layout" onClick={onClickCal}>
        <ResultDisplay />
        {data.map((item, index) => (
          <Grid key={index + 'grid'} child={item}/>            
        ))}
      </div>
      </div>
    </main>
  );
};

export default App;