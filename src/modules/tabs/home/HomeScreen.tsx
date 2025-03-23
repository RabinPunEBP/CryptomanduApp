/* eslint-disable react-native/no-inline-styles */
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import AppColors from '../../../assets/colors/AppColors';
import { HomeNavigationParams } from '../../../routers/HomeRouter';

interface HomeScreenProps {
    navigation: StackNavigationProp<HomeNavigationParams>,
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {

    console.log(navigation);

    return <View style={{ flex: 1, backgroundColor: AppColors().default.background }}>
        <Text>Hellos</Text>
    </View>;
};
