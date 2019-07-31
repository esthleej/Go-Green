import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainContainer from './MainContainer';

const UserContainer = (props: any) => {
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

  console.log(total);

  return (
    <div>
      <div>
        {}
        <div>
          <div>
            Help save Earth and go to your local recycling center today!
          </div>
          <div>
            <div>Total Price: {total.totalPrice}</div>
            <div>Total Items Collected: {total.totalCount}</div>
          </div>
        </div>
        <MainContainer type={props.type} />
      </div>
    </div>
  );
};

export default UserContainer;
