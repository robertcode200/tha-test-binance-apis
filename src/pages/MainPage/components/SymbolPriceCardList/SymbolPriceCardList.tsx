import apiUrls from '../../../../apiUrls';
import type { SymbolPrice } from '../SymbolPriceCard';
import SymbolPriceCard from '../SymbolPriceCard';
import { useFetchData } from "../../../../hooks";

import './symbolPriceCardList.scss';

function renderSymbolPriceCards (symbolPrices: SymbolPrice[] | null) {
    if(!symbolPrices) return null;
    if(!symbolPrices.length) return null;

    return symbolPrices.slice(0, 9).map(
        ({ symbol, price }) => <SymbolPriceCard key={symbol} symbol={symbol} price={price} />
    );
}

const SymbolPriceCardList = () => {
    const {
        data: symbolPrices,
        isLoading,
        error
    } = useFetchData<SymbolPrice[]>(apiUrls.mainPage.getSymbolPriceTicker);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <div className='symbol-price-card-list-container'>
            {renderSymbolPriceCards(symbolPrices)}
        </div>
    );
};

export default SymbolPriceCardList;