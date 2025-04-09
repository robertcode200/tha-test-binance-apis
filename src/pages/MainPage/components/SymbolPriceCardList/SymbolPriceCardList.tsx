import { useEffect, useState } from 'react';

import apiUrls from '../../../../apiUrls';
import type { SymbolPrice } from '../SymbolPriceCard';
import SymbolPriceCard from '../SymbolPriceCard';
import { useFetchData } from "../../../../hooks";
import './symbolPriceCardList.scss';
import { initialLoadCount, scrollLoadMoreCount } from './config';

function getSymbolPricesSlice (
    symbolPrices: (SymbolPrice[] | null),
    sliceCount = 0
) {
    if (!symbolPrices || !symbolPrices.length) return [];

    let sliceStart = 0;
    let sliceEnd = initialLoadCount;

    if (sliceCount) {
        sliceStart = initialLoadCount + scrollLoadMoreCount * (sliceCount - 1);
        sliceEnd = initialLoadCount + scrollLoadMoreCount * sliceCount;
    }

    return symbolPrices.slice(sliceStart, sliceEnd);
}

function renderSymbolPriceCards (symbolPrices: SymbolPrice[] | null) {
    if (!symbolPrices || !symbolPrices.length) return null;

    return symbolPrices.map(
        ({ symbol, price }) => <SymbolPriceCard key={symbol} symbol={symbol} price={price} />
    );
}


function throttle <T extends unknown[]> (
    fn: (...args: T) => void,
    delay = 500
) {
    let timer: null | number = null;
  
    return (...args: T) => {
      if (timer) return;
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, delay);
    };
}

const SymbolPriceCardList = () => {
    const {
        data: symbolPrices,
        isLoading,
        error
    } = useFetchData<SymbolPrice[]>(apiUrls.mainPage.getSymbolPriceTicker);
    const [stateSymbolPrices, setStateSymbolPrices] = useState<SymbolPrice[]>([]);
    const [sliceCount, setSliceCount] = useState(0);

    useEffect(() => {
        const loadMore = () => {
            const innerHeight = window.innerHeight;
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
    
            if (innerHeight + scrollTop + 1 >= scrollHeight) {
                setSliceCount(prevCount => prevCount + 1);
            }
        };

        const throttleLoadMore = throttle(loadMore, 500);

        const handleScroll = () => {
            throttleLoadMore();
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!symbolPrices) return;

        // initial load
        if (!sliceCount) {
            setStateSymbolPrices(getSymbolPricesSlice(symbolPrices));
            return;
        }

        // load more
        setStateSymbolPrices([
            ...stateSymbolPrices,
            ...getSymbolPricesSlice(symbolPrices, sliceCount)
        ]);
    }, [symbolPrices, sliceCount]);

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <div className='symbol-price-card-list-container'>
            {isLoading && <div>Loading...</div>}
            {!isLoading && renderSymbolPriceCards(stateSymbolPrices)}
        </div>
    );
};

export default SymbolPriceCardList;
