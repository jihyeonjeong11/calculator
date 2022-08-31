import React, { SyntheticEvent } from "react";
import "./App.css";
import type { RootState } from "./store/index";
import { useSelector, useDispatch } from "react-redux";
import { decrement, add } from "./features/counterSlice";

import Grid from "./components/Grid";

interface KeyProps {
  val: string;
  big?: boolean;
  color?:string;
}

const keys: KeyProps[][] = [
  [{ val: "ac", big: true }, { val: "del" }, { val: "+", color: 'rgb(243,174,61)' }],
  [{ val: "1" }, { val: "2" }, { val: "3" }, { val: "*", color: 'rgb(243,174,61)' }],
  [{ val: "4" }, { val: "5" }, { val: "6" }, { val: "÷", color: 'rgb(243,174,61)' }],
  [{ val: "7" }, { val: "8" }, { val: "9" }, { val: "-", color: 'rgb(243,174,61)' }],
  [{ val: "." }, { val: "0" }, { val: "=", color: 'rgb(243,174,61)', big: true }],
];

const SayHelloRedux = () => {
  const calculation = useSelector((state: RootState) => state.counter.value);
  

  return (
    <div className="result-layout">
      <h1 className="result-text">{calculation}</h1>
    </div>
  );
};





const App = () => {
  const dispatch = useDispatch();
  const click = (target: HTMLButtonElement) => dispatch(add(target.value));
  const onClickCal = (event: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
    let target = (event.target as HTMLButtonElement)
    click(target)
  }; 
   return (
    <main>
      <div className="cal-wrapper">
      <div className="cal-layout" onClick={onClickCal}>
        <SayHelloRedux />
        {keys.map((item, index) => (
          <Grid key={index + 'grid'} child={item}/>            
        ))}
      </div>
      </div>
    </main>
  );
};

export default App;
