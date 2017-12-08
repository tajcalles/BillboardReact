import React from 'react';
import Chart from './Chart';

const ChartList = ({ charts, updateChart, destroyChart }) => (
  <div className="row">
    { charts.map( chart =>
      <Chart key={chart.id} {...chart}
        updateChart={updateChart}
        destroyChart={destroyChart} />
    )
  }
  </div>
)


export default ChartList;
