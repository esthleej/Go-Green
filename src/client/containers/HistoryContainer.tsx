import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const HistoryContainer = (props: any) => {
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalRecycled, setTotalRecycled] = useState(0);
  const [date, setDate] = useState([]);
  const [amount, setAmount] = useState([]);

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
        console.log('histoire', data);
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
        // console.log('data', data);
        // const date = data.recyclingHistory.map(ele => {
        //   const dateObj = new Date(ele.date);
        //   return dateObj.toDateString();
        // });
        // setDate(date);

        // const amount = data.recyclingHistory.map(ele => {
        //   return ele.amountRecycled;
        // });

        // setAmount(amount);
      });
  }, []);

  console.log('dateeeee', date);

  const options = {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: ''
    }
  };

  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'November',
      'December'
    ],
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 0, 0, 0, 4, totalRecycled, 0, 0, 0, 0]
      }
    ]
  };

  return (
    <div>
      <Header totalPaid={totalPaid} totalItemsRecycled={totalRecycled} />
      <GraphStyled style={{ padding: '50px' }}>
        <Bar data={data} options={options} />
      </GraphStyled>
    </div>
  );
};

export default HistoryContainer;

const GraphStyled = styled.div`
  padding: 20px;
`;
