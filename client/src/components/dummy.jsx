import React from 'react';

const Dummy = ({ clickHandle }) => {
  return (
    <div>
      {clickHandle('types')}
    </div>
  )
}

export default Dummy;