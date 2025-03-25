import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import AppColors from '../../../assets/colors/AppColors';
import { HomeNavigationParams } from '../../../routers/HomeRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { BalanceCard } from './BalanceCard';
import { HeaderView } from '../../../uicomponents/HeaderView';
import { RecentCheckList } from './RecentCheckList';

interface HomeScreenProps {
    navigation: StackNavigationProp<HomeNavigationParams>,
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {

    console.log(navigation);

    return <SafeAreaView style={styles.screen}>
        <ScrollView style={styles.scrollView}>
            <HeaderView />
            <BalanceCard />
            <RecentCheckList />
        </ScrollView>
    </SafeAreaView >;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors().default.background,
        paddingHorizontal: 16,
    },
    scrollView: {
        marginVertical: 16,
    },
});
