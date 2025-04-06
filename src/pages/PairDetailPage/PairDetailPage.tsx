import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import './pairDetailPage.scss';

const PairDetailPage = () => {
    const { pair } = useParams<{ pair: string }>();

    return (
        <div className='pair-detail-page-container'>
            <h1 className='page-title'>Pair Detail Page</h1>
            <div className="top-info-bar">
                <Link className="back-to-home-page-button" to="/">Back to Home Page</Link>
                <div className="pair-content-container">
                    <span className="content">Pair: {pair}</span>
                </div>
            </div>
            <div className="kline-chart-container">KLine Chart</div>
        </div>
    );
};

export default PairDetailPage;
