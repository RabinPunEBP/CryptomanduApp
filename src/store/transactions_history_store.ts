import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import asyncStorage from './storage/async_storage';
import { GetChartDataResponse } from '../api_services/ChartApiService';

type TransactionsHistoryState = {
    chartData: GetChartDataResponse | null;
    updateChartData: (chartData: GetChartDataResponse) => void;
};

export const useTransactionsHistoryStore = create<TransactionsHistoryState>()(
    persist<TransactionsHistoryState>(
        (set) => ({
            chartData: null,
            updateChartData(chartData: GetChartDataResponse) {
                set({
                    chartData,
                });
            },
        }),
        {
            name: 'transaction-history-store',
            storage: createJSONStorage(() => asyncStorage),
        }
    )
);