import React from 'react';

const Template = ({ clickHandle }) => {
  return (
    <div>
      {clickHandle('types')}
    </div>
  )
}

export default Template;