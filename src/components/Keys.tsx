import React, { SyntheticEvent } from "react";
import type { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { decrement, add } from "../features/counterSlice";


const KeyRedux = React.memo(({ val, big, key, color }: { val: string; big?: boolean, key: string, color?:string }) => {
  return (
    <React.Fragment key={key}>
      <button value={val} style={{ backgroundColor: color ? color :  "rgb(235,235,235)" }}>{val}</button>
    </React.Fragment>
  );
});

export default KeyRedux;