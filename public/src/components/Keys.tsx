import React, { SyntheticEvent } from "react";



const KeyRedux = React.memo(({ val, big, color, type }: { val: string; big?: boolean, key: string, color?:string, type?: string }) => {
  return (
    <React.Fragment key={val + 'button'}>
      <button id={type} className="span-two" value={val} style={{ backgroundColor: color ? color :  "rgb(235,235,235)" }}>{val}</button>
    </React.Fragment>
  );
});

export default KeyRedux;