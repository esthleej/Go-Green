import React from 'react';
import styled from 'styled-components';
import {Col, Statistic} from 'antd';
import { createGlobalStyle } from "styled-components";



const Recycle = (props: any) => {
  const materialInfo = props.materialInfo;
  const totalPrice =
    materialInfo.lessThan * 0.05 + materialInfo.greaterThan * 0.1;
  const totalCount = materialInfo.lessThan + materialInfo.greaterThan;

  return (
    <MaterialStyled>
      <CardStyled>{props.material}</CardStyled>
      <div>Total Amount: $ {(Math.round(100*totalPrice)/100).toFixed(2)}</div>
      <AmountStyled>
        <div>
          {/* <img src="../src/assets/plastic_less.png" /> */}
          Less than 24oz
        </div>
        <div>
          <button id={props.material} value={'lessThan'} onClick={e => {
            props.handleDelete(e, -0.5);
            }}>-</button>
          {materialInfo.lessThan}
          <button id={props.material} value={'lessThan'}onClick={e => {
            props.handleAdd(e, 0.5);
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
            props.handleDelete(e, -0.10);
            }}>-</button>
          {materialInfo.greaterThan}
          <button id={props.material} value={'greaterThan'} onClick={e => {
            props.handleAdd(e, 0.10);
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
    border: 1px solid black;
    margin: 20px;
`
const AmountStyled = styled.div  `
  display: flex;
  justify-content:space-between;
  display: flex;
  border-bottom: 1px solid gray;
  margin-bottom: 18px;
`
const TotalItemStyled = styled.div`
  text-align: right;
`
const CardStyled = styled.div`
  background-color: #9ac8ed;
`


export default Recycle;
