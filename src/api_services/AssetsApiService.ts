import { useEffect } from 'react';
import { NetworkClient } from './NetworkClient';
import { API } from './API';
import { AssetInformation } from '../modules/tabs/home/home_screen/AssetsList/AssetsListRow';
import { useAssetStore } from '../store/assets_store';

export interface GetAssetsResponse {
    data: AssetInformation[];
};

export default function AssetsApiService() {

    const abortController = new AbortController();
    const { updateAssets } = useAssetStore();

    const getAssets = async () => {
        const response: GetAssetsResponse = await NetworkClient('get', API.assets.getAssets, abortController.signal);
        updateAssets(response.data);
    };

    useEffect(() => {
        return (() => {
            abortController.abort();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { getAssets };

}