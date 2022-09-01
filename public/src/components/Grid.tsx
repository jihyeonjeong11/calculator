import React, {useMemo} from 'react';

import * as helpers from '../helpers/helperfuncs';
import Keys from './Keys';

const Grid = React.memo(({child,} : {child: any[]}) => {
  const haveBig = useMemo(()=>child.findIndex((item) => (item.big)),[child])
  const gridTemplate = useMemo(() =>helpers.buildGridTemplate(haveBig, child.length), [haveBig, child.length])

  return (
    <div className="grid-layout" style={{gridTemplateColumns: gridTemplate}}>
      {child.map((c, index) => {
        return (
          <Keys val={c.val} big={c.big} color={c.color} type={c.type} key={index  + 'key'} />
        )
      })}
    </div>
  )
})

export default Grid;