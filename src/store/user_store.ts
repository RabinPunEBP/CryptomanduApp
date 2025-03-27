import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import asyncStorage from './storage/async_storage';
import { GetPortFolioResponse } from '../api_services/UserApiService';

type UserState = {
    portfolio: GetPortFolioResponse;
    updatePortfolio: (portfolio: GetPortFolioResponse) => void;
};

const initialPortfolio: GetPortFolioResponse = {
    current_balance: 0,
    income: {
        last_month: 0,
        change: 0,
    },
    expense: {
        last_month: 0,
        change: 0,
    },
    percent_change: 0,
};

export const useUserStore = create<UserState>()(
    persist<UserState>(
        (set) => ({
            portfolio: initialPortfolio,
            updatePortfolio(portfolio: GetPortFolioResponse) {
                set({
                    portfolio,
                });
            },
        }),
        {
            name: 'user-store',
            storage: createJSONStorage(() => asyncStorage),
        }
    )
);