import SymbolPriceCardList from './components/SymbolPriceCardList';
import './mainPage.scss';

const MainPage = () => {
    return (
        <div className='main-page-container'>
            <h1 className='page-title'>Main Page</h1>
            <SymbolPriceCardList />
        </div>
    );
};

export default MainPage;
