import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStorage = {
    getItem: async (name: string) => {
        const data = (await AsyncStorage.getItem(name)) || null;
        return data;
    },
    setItem: async (name: string, value: any) => {
        await AsyncStorage.setItem(name, value);
    },
    removeItem: async (name: string) => {
        await AsyncStorage.removeItem(name);
    },
};

export default asyncStorage;