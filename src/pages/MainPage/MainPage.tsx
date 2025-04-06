import { Link } from "react-router-dom";

import apiUrls from '../../apiUrls';
import { SymbolPrice } from './interface';
import { useFetchPageData } from "../../hooks";

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

    console.log(symbolPrices);

    return (
        <div>
            <div>MainPage</div>
            <Link to="/pair/test123">
                <span>test123</span>
            </Link>
        </div>
    );
};

export default MainPage;
