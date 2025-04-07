import { useParams } from "react-router-dom";

import apiUrls from '../../../../../apiUrls';
import { UiKline } from "./interface";
import { useFetchData } from "../../../../../hooks";

type KLineChartProps = {
    interval: string;
};

const KLineChart = ({ interval }: KLineChartProps) => {
    const { pair: symbol } = useParams<{ pair: string }>();
    const {
        data: uiKlines,
        isLoading,
        error
    } = useFetchData<UiKline[]>(`${apiUrls.pairDetailPage.kLineChart.getUiKlines}?symbol=${symbol}&interval=${interval}`);
    console.log(uiKlines);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <div>KLineChart {interval}</div>
    );
};

export default KLineChart;
