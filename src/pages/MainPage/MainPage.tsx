import apiUrls from '../../apiUrls';
import { SymbolPrice } from './interface';
import { useFetchPageData } from "../../hooks";
import SymbolPriceCard from './components/SymbolPriceCard';
import './mainPage.scss';

const MainPage = () => {
    const {
        data: symbolPrices,
        isLoading,
        error
    } = useFetchPageData<SymbolPrice[]>(apiUrls.mainPage.getSymbolPriceTicker);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <div className='main-page-container'>
            <h1 className='page-title'>Main Page</h1>
            {renderSymbolPriceCards(symbolPrices?.slice(0, 9))}
        </div>
    );
};

function renderSymbolPriceCards (symbolPrices: SymbolPrice[] | null) {
    if(!symbolPrices) return null;
    if(!symbolPrices.length) return null;

    return (
        <div className="symbol-price-cards-container">
            {symbolPrices.map(
                ({ symbol, price }) => <SymbolPriceCard key={symbol} symbol={symbol} price={price} />
            )}
        </div>
    );
}

export default MainPage;
