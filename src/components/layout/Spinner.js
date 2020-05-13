import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return ( 
    <div>
      <img 
        src={spinner}
        alt='loading...'
        style={{ widht: '200px', margin: '40px auto', display: 'block' }}
      />
    </div>
  );
};