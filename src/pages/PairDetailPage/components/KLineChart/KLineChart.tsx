import { useState } from "react";

import config from './config';
const {
    intervals
} = config;

import './kLineChart.scss';

const KLineChart = () => {
    const [selectedInterval, setSelectedInterval] = useState(intervals[0]);

    console.log(selectedInterval);

    const intervalSelectId = 'interval-select';

    return (
        <div className="k-line-chart-container">
            <div className="interval-select-container">
                <label htmlFor={intervalSelectId}>Interval:</label>
                <select
                    id={intervalSelectId}
                    className="interval-select"
                    value={selectedInterval} 
                    onChange={e => setSelectedInterval(e.target.value)}
                >
                    {intervals.map(interval => <option key={interval} value={interval}>{interval}</option>)}
                </select>
            </div>
            <div>Lightweight Chart: K Line Chart</div>
        </div>
    );
};

export default KLineChart;
