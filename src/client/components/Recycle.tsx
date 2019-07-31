import React from 'react';

const Recycle = (props: any) =>{

  return (
  <div>
    <div>
      {props.material}
    </div>
    <div>
      Total Amount: {}
    </div>
    <div>
      <img src=''/>Less than 24oz
      <button id=''>-</button>
      #{}
      <button id=''>+</button>
    </div>
    <div>
      <img src=''/>Greater than 24oz
      <button id=''>-</button>
      #{}
      <button id=''>+</button>
    </div>
    <div>Total Item Count: #{} </div>
  </div>
  );

}

export default Recycle;
