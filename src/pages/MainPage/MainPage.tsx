// import { useRef, useEffect } from 'react';
import SymbolPriceCardList from './components/SymbolPriceCardList';
import './mainPage.scss';

const MainPage = () => {
        // const handleScroll = () => {
        //     console.log('Height:', document.documentElement.scrollHeight);
        // };
    
        // const isScrollEventListenerSet = useRef<boolean>(false);
    
        // const renderCount = useRef(0);
        // const theRangerEnteredCount = useRef(0);
    
        // useEffect(() => {
        //     renderCount.current += 1;
        //     console.log('scroll effect', renderCount);
        //     console.log(' ');
        //     if (!isScrollEventListenerSet.current) {
        //         theRangerEnteredCount.current += 1;
        //         console.log('theRangerEnteredCount', theRangerEnteredCount.current);
        //         window.addEventListener('scroll', handleScroll);
        //         isScrollEventListenerSet.current = true;
    
        //     }
    
        //     return () => {
    
        //     };
        // }, []);


    return (
        <div className='main-page-container'>
            <h1 className='page-title'>Main Page</h1>
            <SymbolPriceCardList />
        </div>
    );
};

export default MainPage;
