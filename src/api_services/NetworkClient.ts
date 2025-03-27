import axios, { AxiosError } from 'axios';

export async function NetworkClient<Type>(type: 'post' | 'get', url: string, data?: any, signal?: AbortSignal, headers?: any): Promise<Type> {
    try {
        if (type === 'post') {
            const response = await axios.post(url, data, { headers: headers, signal: signal });
            return response.data;
        } else {
            const response = await axios.get(url, { params: data, headers: headers, signal: signal });
            return response.data;
        }
    } catch (error) {
        const networkError = error as AxiosError;
        console.log('Nerror');
        console.log(error);
        if (networkError.message.includes('code 500')) {
            throw new Error('Something went wrong.\nPlease try again.');
        } else {
            throw networkError;
        }
    }
}