import ChartBar from './Chartbar.js';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(point => point.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {dataPoints.map(point => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMaximum}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
