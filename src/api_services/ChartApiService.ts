import { useEffect } from 'react';
import { NetworkClient } from './NetworkClient';
import { API } from './API';
import { TrendData } from '../uicomponents/AreaChartView';
import { IncomeExpenseData } from '../uicomponents/BarGraphView';
import { useTransactionsHistoryStore } from '../store/transactions_history_store';

export interface GetChartDataResponse {
    area_chart: {
        data: TrendData[][];
    },
    line_chart: {
        data: IncomeExpenseData[][];
    };
};

export default function ChartApiService() {

    const abortController = new AbortController();
    const { updateChartData } = useTransactionsHistoryStore();

    const getChartdata = async () => {
        const response: GetChartDataResponse = await NetworkClient('get', API.chart.getChartdata, abortController.signal);
        updateChartData(response);
    };

    useEffect(() => {
        return (() => {
            abortController.abort();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { getChartdata };

}