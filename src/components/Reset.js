import React from 'react';

function Reset(props) {
  return (
    <div>
        <button className='reset' onClick={() => props.onClick()}>
            Reset
        </button>
    </div>

  )
}

export default Reset;