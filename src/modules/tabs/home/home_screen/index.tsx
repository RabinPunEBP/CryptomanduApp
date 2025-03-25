import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import AppColors from '../../../../assets/colors/AppColors';
import { HomeNavigationParams } from '../../../../routers/HomeRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderView } from '../../../../uicomponents/HeaderView';
import { RecentCheckList } from './RecentCheckList';
import { BalanceCard } from './BalanceCard';
import { AssetsList } from './AssetsList';

interface HomeScreenProps {
    navigation: StackNavigationProp<HomeNavigationParams>,
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {

    console.log(navigation);

    return <SafeAreaView edges={['right', 'left', 'top']} style={styles.screen}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <HeaderView />
            <BalanceCard />
            <RecentCheckList />
            <AssetsList />
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
