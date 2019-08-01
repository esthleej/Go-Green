import React from 'react';
import Header from '../components/Header';

const HistoryContainer = (props: any) => {
  return (
    <div>
      <Header
        totalPaid={props.totalPaid}
        totalItemsRecycled={props.totalItemsRecycled}
      />
    </div>
  );
};

export default HistoryContainer;
