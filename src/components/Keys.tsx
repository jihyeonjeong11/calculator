import React, { ReactElement } from "react";

interface KeyProps {
  val: string;
  color?: string;
  type?: string;
}

const KeyRedux: React.FC<KeyProps> = ({
  val,
  color,
  type,
}: KeyProps) : ReactElement => {
  return (
    <React.Fragment key={val + "button"}>
      <button
        id={type}
        className="span-two"
        value={val}
        style={{ backgroundColor: color ? color : "rgb(235,235,235)" }}
      >
        {val}
      </button>
    </React.Fragment>
  );
};
export default React.memo(KeyRedux);
