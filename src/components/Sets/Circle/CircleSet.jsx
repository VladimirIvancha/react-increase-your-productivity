import React from 'react';
import duplicateRender from '../../../utils/utils';
import CircleShape from '../../Shapes/Circle/CircleShape';

function CircleSet({number, setClassName, itemClassName}) {
  return (
    <div className={setClassName}>
      {
        duplicateRender(number).map(item => 
          (
            <CircleShape
                key={item}
                id={item}
                className={itemClassName}
            />
          ) 
        )
      }
    </div>
  );
}
export default CircleSet;