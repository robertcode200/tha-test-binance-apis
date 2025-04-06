import { memo } from "react";
import { Link } from "react-router-dom";

import './symbolPriceCard.scss';

type SymbolPriceCardProps = {
    symbol: string;
    price: string;
};

const SymbolPriceCard = ({ symbol, price }: SymbolPriceCardProps) => {
    return (
        <Link to={`/pair/${symbol}`} className="symbol-price-card-container">
            <div className="card-symbol">
                <span className="content">{symbol}</span>
            </div>
            <div className="card-price">
                <span className="content">{price}</span>
            </div>
        </Link>
    );
};

export default memo(SymbolPriceCard);
