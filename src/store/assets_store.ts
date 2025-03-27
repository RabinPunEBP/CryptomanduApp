import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import asyncStorage from './storage/async_storage';
import { AssetInformation } from '../modules/tabs/home/home_screen/AssetsList/AssetsListRow';

type AssetStoreState = {
    assets: AssetInformation[];
    updateAssets: (assets: AssetInformation[]) => void;
};

export const useAssetStore = create<AssetStoreState>()(
    persist<AssetStoreState>(
        (set) => ({
            assets: [],
            updateAssets(assets: AssetInformation[]) {
                set({
                    assets,
                });
            },
        }),
        {
            name: 'asset-store',
            storage: createJSONStorage(() => asyncStorage),
        }
    )
);
