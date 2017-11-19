import React from 'react';

const Dummy = ({ changeView }) => {
  return (
    <div>
      {changeView('types')}
    </div>
  )
}

export default Dummy;