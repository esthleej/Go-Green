import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props: any) => {
  const price = Object.values(props.type);
  const total: any = price.reduce(
    (acc: any, curr: any) => {
      acc.totalCount += curr.lessThan;
      acc.totalCount += curr.greaterThan;
      acc.totalPrice += curr.lessThan * 0.05;
      acc.totalPrice += curr.greaterThan * 0.1;
      return acc;
    },
    { totalPrice: 0, totalCount: 0 }
  );

  return (
    <div>
      <div>Help save Earth and go to your local recycling center today!</div>
      <Link to={`/history`}>
        <button>See Past Recyling Histroy</button>
      </Link>
      <TotalCategoriesInfoStyled>
        <TotalStyled>
          Total Price:
          <TotalNumberStyled>{total.totalPrice}</TotalNumberStyled>
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
