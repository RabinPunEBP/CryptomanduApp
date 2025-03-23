export default function AppImages() {

    return Object.freeze({
        tabs: {
            home: require('./tabicons/home.png'),
            home_selected: require('./tabicons/home_selected.png'),
            trades: require('./tabicons/trades.png'),
            trades_selected: require('./tabicons/trades_selected.png'),
            market: require('./tabicons/market.png'),
            market_selected: require('./tabicons/market_selected.png'),
            transactions: require('./tabicons/transactions.png'),
            transactions_selected: require('./tabicons/transactions_selected.png'),
        },
    });
}

