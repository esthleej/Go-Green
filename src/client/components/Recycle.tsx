import React from 'react';

const Recycle = (props: any) => {
  console.log('material info', props.materialInfo);
  const materialInfo = props.materialInfo;
  const totalPrice =
    materialInfo.lessThan * 0.05 + materialInfo.greaterThan * 0.1;
  const totalCount = materialInfo.lessThan + materialInfo.greaterThan;

  return (
    <div>
      <div>{props.material}</div>
      <div>Total Amount: {totalPrice}</div>
      <div>
        <img src="" />
        Less than 24oz
        <button id="">-</button>#{}
        <button id="">+</button>
      </div>
      <div>
        <img src="" />
        Greater than 24oz
        <button id="">-</button>#{}
        <button id="">+</button>
      </div>
      <div>Total Item Count: {totalCount} </div>
    </div>
  );
};

export default Recycle;
