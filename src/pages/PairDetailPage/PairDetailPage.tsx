import { Link } from "react-router-dom";

import './pairDetailPage.scss';
import KLineChartContainer from "./components/KLineChartContainer";

const PairDetailPage = () => {
    return (
        <div className='pair-detail-page-container'>
            <h1 className='page-title'>Pair Detail Page</h1>

            <Link className="back-to-home-page-button" to="/">Back to Home Page</Link>

            <KLineChartContainer />
        </div>
    );
};

export default PairDetailPage;
