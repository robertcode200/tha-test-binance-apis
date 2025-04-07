const BINANCE_API_BASE_URL = 'https://api.binance.com';

export default {
    mainPage: {
        getSymbolPriceTicker: `${BINANCE_API_BASE_URL}/api/v3/ticker/price`,
    },
    pairDetailPage: {
        kLineChart: {
            getUiKlines: `${BINANCE_API_BASE_URL}/api/v3/uiKlines`,
        },
    },
};
