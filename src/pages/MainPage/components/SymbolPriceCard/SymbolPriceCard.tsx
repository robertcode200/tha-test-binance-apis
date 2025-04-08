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
                {symbol}
            </div>
            <div className="card-price">
                {price}
            </div>
        </Link>
    );
};

export default memo(SymbolPriceCard);
