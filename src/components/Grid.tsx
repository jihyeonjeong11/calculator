import React, { ReactElement, useMemo } from "react";
import * as helpers from "../helpers/helperfuncs";
import Keys from "./Keys";

interface GridProps {
  child: any[];
}

const Grid: React.FC<GridProps> = ({ child }: GridProps): ReactElement => {
  const haveBig = useMemo(() => child.findIndex((item) => item.big), [child]);
  const gridTemplate = useMemo(
    () => helpers.buildGridTemplate(haveBig, child.length),
    [haveBig, child.length]
  );

  return (
    <div className="grid-layout" style={{ gridTemplateColumns: gridTemplate }}>
      {child.map((c: ChildProps, index: number) => {
        return (
          <Keys val={c.val} color={c.color} type={c.type} key={index + "key"} />
        );
      })}
    </div>
  );
};

export default Grid;
