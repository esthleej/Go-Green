import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Type } from '../types';
import { Button, Statistic } from 'antd';

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
      <HelpStyled>
        Help save Earth and go to your local recycling center today!
      </HelpStyled>
      <TotalCategoriesInfoStyled>
        <StatsStyled>
          <TotalStyled>
            <Statistic
              title="Total Price"
              value={(Math.round(100 * total.totalPrice) / 100).toFixed(2)}
              prefix="$"
            />
            {/* Total Price:
          <TotalNumberStyled>
            ${(Math.round(100 * total.totalPrice) / 100).toFixed(2)}
          </TotalNumberStyled> */}
          </TotalStyled>
          <TotalStyled>
            <Statistic
              title="Total Items Collected"
              value={total.totalCount}
              prefix="      "
            />
            {/* Total Items Collected:
          <TotalNumberStyled>{total.totalCount}</TotalNumberStyled> */}
          </TotalStyled>
        </StatsStyled>
        {props.isSignedIn === true && (
          <RecycleButtonStyled>
            <PastHistoryStyled>
              <Link to={'/history'}>
                <Button type="default" size="small">
                  See Past Recycling History
                </Button>
              </Link>
            </PastHistoryStyled>
            <div>
              <Button
                type="default"
                size="small"
                onClick={() => {
                  props.handleRecycle();
                }}
              >
                Recycle Now!
              </Button>
            </div>
          </RecycleButtonStyled>
        )}
      </TotalCategoriesInfoStyled>
    </div>
  );
};

const TotalCategoriesInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const TotalStyled = styled.div`
  // border: 1px solid black;
  padding: 30px;
  background-color: #f1f1f1;
`;
const TotalNumberStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StatsStyled = styled.div`
  display: flex;
`;

const HelpStyled = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.4em;
`;

const RecycleButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const PastHistoryStyled = styled.div`
  margin-right: 15px;
`;

export default Header;
