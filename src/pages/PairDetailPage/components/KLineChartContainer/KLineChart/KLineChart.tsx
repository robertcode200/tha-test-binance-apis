import { memo, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { CandlestickSeries, createChart } from 'lightweight-charts';
import type { UTCTimestamp } from 'lightweight-charts';

import apiUrls from '../../../../../apiUrls';
import { UiKline } from "./interface";
import { useFetchData } from "../../../../../hooks";

type KLineChartProps = {
    interval: string;
};

function convertUiKlinesToSeriesData (uiKlines: UiKline[]) {
    if (!uiKlines || !uiKlines.length) return [];
    return uiKlines.map(([time, open, high, low, close]) => ({
        time: Number(time)/1000 as UTCTimestamp,
        open: Number(open),
        high: Number(high),
        low: Number(low),
        close: Number(close),
    }));
}

const KLineChart = ({ interval }: KLineChartProps) => {
    const { pair: symbol } = useParams<{ pair: string }>();
    const {
        data: uiKlines,
        isLoading,
        error
    } = useFetchData<UiKline[]>(
        `${apiUrls.pairDetailPage.kLineChart.getUiKlines}?symbol=${symbol}&interval=${interval}`
    );

    const kLineChartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!kLineChartContainerRef.current) return;
        if (!uiKlines) return;

        const chart = createChart(kLineChartContainerRef.current, {
            width: kLineChartContainerRef.current!.clientWidth,
            height: kLineChartContainerRef.current!.clientHeight,

            rightPriceScale: {
                entireTextOnly: true,
            },
            timeScale: {
                fixLeftEdge: true,
                fixRightEdge: true,
            },
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addSeries(CandlestickSeries, {
            priceFormat: {
                minMove: 0.000001,
                precision: 6,
            },
            upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' 
        });
        newSeries.setData(convertUiKlinesToSeriesData(uiKlines));

        const handleResize = () => {
            if (!kLineChartContainerRef.current) return;
            chart.applyOptions({ width: kLineChartContainerRef.current.clientWidth });
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [interval, uiKlines]);

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <>
            <h1>{symbol}</h1>
            {isLoading && <div>Loading...</div>}
            {!isLoading && <div ref={kLineChartContainerRef} style={{ width: '100%', height: '600px' }} />}
        </>
    );
};

export default memo(KLineChart);
