import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Type } from '../types';
import { Button } from 'antd';

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
      <HelpStyled>Help save Earth and go to your local recycling center today!</HelpStyled>
      {
        props.isSignedIn === true &&
      <RecycleButtonStyled>
      {/* <Statistic title='Total Amount: $' value={2423442}/> */}
      <Link to={'/history'}>
        <Button type="default" size="small">See Past Recycling History</Button>
      </Link>
      <Button type="primary" size="small"
        onClick={() => {
          props.handleRecycle();
        }}
      >
        Recycle Now!
      </Button>
      </RecycleButtonStyled>
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
  background-color: #f1f1f1;
`;
const TotalNumberStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const HelpStyled = styled.div`
 text-align: center;
 margin-top: 20px;
`

const RecycleButtonStyled = styled.div`
  display:flex;
  justify-content: space-around;
  margin: 10px auto 10px 10px;

`

export default Header;
