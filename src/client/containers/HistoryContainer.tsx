import React, {useEffect, useState} from 'react';
import Header from '../components/Header';

const HistoryContainer = (props: any) => {
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalRecycled, setTotalRecycled] = useState(0);

  useEffect(() => {
    fetch('/recyclingHistory', {
      headers: {
        'Content-Type': 'application/json',
        username: props.username
      }
    })
    .then(res => res.json())
    .then(data => {
      // this is all of the user's deposits and payments
      console.log('histoire', data)
    });

    fetch('/users', {
      headers: {
        'Content-Type': 'application/json',
        username: props.username
      }
    })
    .then(res => res.json())
    .then(data => {
      setTotalPaid(data.totalPaid);
      setTotalRecycled(data.totalItemsRecycled);
    })
  }, [])

  return (
    <div>
      <Header
        totalPaid={totalPaid}
        totalItemsRecycled={totalRecycled}
      />
    </div>
  );
};

export default HistoryContainer;
