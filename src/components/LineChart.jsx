import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i--) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
  };

  const brColor = () => {
    if(coinHistory?.data?.change >= 0){
      return '#00FF00'
    }else{
      return '#ff0000'
    }
  }

  const bgColor = () => {
    if(coinHistory?.data?.change >= 0){
      return '#88B04B'
    }else{
      return '#DD4124'
    }
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `Price of ${coinName} in USD`,
        data: coinPrice,
        fill: false,
        backgroundColor: bgColor,
        borderColor: brColor,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };


  return (
    <>
      <Row className='chart-header' >
        <Title level={2} className='chart-title' >{coinName} Price Chart</Title>
        <Col className='price-container' >
          <Title level={5} className='price-change' >Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className='current-price' >Current {coinName} Price: ${currentPrice} </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart
