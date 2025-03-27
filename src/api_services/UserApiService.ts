import { useEffect } from 'react';
import { NetworkClient } from './NetworkClient';
import { API } from './API';
import { useUserStore } from '../store/user_store';

interface IncomeExpenseInfo {
    last_month: number,
    change: number;
}

export interface GetPortFolioResponse {
    current_balance: number,
    income: IncomeExpenseInfo,
    expense: IncomeExpenseInfo,
    percent_change: number;
};

export default function UserApiService() {

    const abortController = new AbortController();
    const { updatePortfolio } = useUserStore();

    const getPortfolio = async () => {
        const response: GetPortFolioResponse = await NetworkClient('get', API.user.getPortfolio, abortController.signal);
        updatePortfolio(response);
    };

    useEffect(() => {
        return (() => {
            abortController.abort();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { getPortfolio };

}
