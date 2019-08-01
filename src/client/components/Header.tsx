import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Type } from '../types';

const Header = (props: any) => {
  let total: Type | any = {
    totalCount: 0,
    totalPrice: 0
  };
  if (props.type !== undefined) {
    const price = Object.values(props.type);
    total = price.reduce(
      (acc: any, curr: any) => {
        acc.totalCount += curr.lessThan;
        acc.totalCount += curr.greaterThan;
        acc.totalPrice += curr.lessThan * 0.05;
        acc.totalPrice += curr.greaterThan * 0.1;
        return acc;
      },
      { totalPrice: 0, totalCount: 0 }
    );
  } else {
    total['totalPrice'] = props.totalPaid;
    total['totalCount'] = props.totalItemsRecycled;
  }

  return (
    <div>
      <div>Help save Earth and go to your local recycling center today!</div>
      {
        props.isSignedIn === true &&
      <div>
      <Link to={'/history'}>
        <button>See Past Recycling History</button>
      </Link>
      <button
        onClick={() => {
          props.handleRecycle();
        }}
      >
        Recycle Now!
      </button>
      </div>
      }
      <TotalCategoriesInfoStyled>
        <TotalStyled>
          Total Price:
          <TotalNumberStyled>
            ${(Math.round(100 * total.totalPrice) / 100).toFixed(2)}
          </TotalNumberStyled>
        </TotalStyled>
        <TotalStyled>
          Total Items Collected:
          <TotalNumberStyled>{total.totalCount}</TotalNumberStyled>
        </TotalStyled>
      </TotalCategoriesInfoStyled>
    </div>
  );
};

const TotalCategoriesInfoStyled = styled.div`
    display:flex
    justify-content: space-evenly;
`;
const TotalStyled = styled.div`
  border: 1px solid black;
  padding: 30px;
`;
const TotalNumberStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export default Header;
