const BASE_URL = 'https://crypto-api-nine-tawny.vercel.app/';

export const API = Object.freeze({
    user: Object.freeze({
        getPortfolio: BASE_URL + 'userPortfolio',
    }),
    chart: Object.freeze({
        getChartdata: BASE_URL + 'chartData',
    }),
    assets: Object.freeze({
        getAssets: BASE_URL + 'assets',
    }),
});
