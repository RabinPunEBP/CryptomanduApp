import { useEffect } from 'react';
import { NetworkClient } from './NetworkClient';
import { API } from './API';

interface IncomeExpenseInfo {
    last_month: number,
    change: number;
}
interface GetPortFolioResponse {
    current_balance: number,
    income: IncomeExpenseInfo,
    expense: IncomeExpenseInfo,
    percent_change: number;
};

export default function UserApiService() {

    const abortController = new AbortController();

    const getPortfolio = async () => {
        const response: GetPortFolioResponse = await NetworkClient('get', API.user.getPortfolio, abortController.signal);
        return response;
    };

    useEffect(() => {
        return (() => {
            abortController.abort();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { getPortfolio };

}