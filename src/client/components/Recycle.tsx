import React from 'react';
import styled from 'styled-components';

const Recycle = (props: any) => {
  const materialInfo = props.materialInfo;
  const totalPrice =
    materialInfo.lessThan * 0.05 + materialInfo.greaterThan * 0.1;
  const totalCount = materialInfo.lessThan + materialInfo.greaterThan;

  return (
    <MaterialStyled>
      <div>{props.material}</div>
      <div>Total Amount: $ {(Math.round(100*totalPrice)/100).toFixed(2)}</div>
      <AmountStyled>
        <div>
          <img src="" />
          Less than 24oz
        </div>
        <div>
          <button id={props.material} value={'lessThan'} onClick={e => {
            props.handleDelete(e);
            props.handlePayment(-.05);
            }}>-</button>
          {materialInfo.lessThan}
          <button id={props.material} value={'lessThan'}onClick={e => {
            props.handleAdd(e);
            props.handlePayment(.05);
            }}>+</button>
        </div>
      </AmountStyled>
      <AmountStyled>
        <div>
          <img src="" />
          Greater than 24oz
        </div>
        <div>
        <button id={props.material} value={'greaterThan'} onClick={e => {
            props.handleDelete(e);
            props.handlePayment(-.10);
            }}>-</button>
          {materialInfo.greaterThan}
          <button id={props.material} value={'greaterThan'} onClick={e => {
            props.handleAdd(e);
            props.handlePayment(.10);
            }}>+</button>
        </div>
      </AmountStyled>
      <TotalItemStyled>Total Item Count: {totalCount} </TotalItemStyled>
    </MaterialStyled>
  );
};


const MaterialStyled = styled.div `
    display:flex;
    flex-direction: column;
    padding: 20px;
`
const AmountStyled = styled.div  `
  display: flex;
  border: 1px solid blue;
  justify-content:space-between
`
const TotalItemStyled = styled.div`
  text-align: right;
  
`
export default Recycle;
