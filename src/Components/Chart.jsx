import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { CDBContainer } from 'cdbreact';

const Chart = () => {
  const [data] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct','Nov', 'Dec'],
    datasets: [
      {
        label: 'Order Status',
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgba(20, 156, 8, 1)',
        data: [200, 300, 350,540, 560, 250, 700, 640, 400, 200, 230, 370],
      },
    //   {
    //     label: 'My Second dataset',
    //     backgroundColor: 'rgba(71, 225, 167, 0.5)',
    //     borderColor: 'rgb(71, 225, 167)',
    //     data: [28, 48, 40, 19, 96, 27, 100],
    //   },
    ],
  });

  return (
    <CDBContainer>
      <h3 className="mt-5">Analytics</h3>
      <Line data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default Chart;