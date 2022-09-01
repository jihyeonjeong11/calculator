import type { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { operandSymbols } from "../data/symbols";

const ResultDisplay = () => {

  
  const resultDisplay = useSelector((state: RootState) => state.counter.value);
  const prevOperand = useSelector((state: RootState) => state.counter.prevOperand);
  const prevCalculation = useSelector((state: RootState) => state.counter.prevCalculation);

  return (
    <div className="result-layout">
      <div className="result-content">
        <p>{prevCalculation} {prevOperand} </p>
        <h3 className="result-text">{resultDisplay ? resultDisplay : '0'} </h3>
      </div>
    </div>
  );
};

export default ResultDisplay;
