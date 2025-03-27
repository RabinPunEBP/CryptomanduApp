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
import { Fragment } from 'react';
import ImageButton from '../../../../uicomponents/ImageButton';

interface HomeScreenProps {
    navigation: StackNavigationProp<HomeNavigationParams>,
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {

    const headerButtons = () => {
        return <Fragment>
            <ImageButton style={styles.headerButton} source={require('../../../../assets/images/add_icon.png')} onPress={() => { }} />
            <ImageButton style={styles.headerButton} source={require('../../../../assets/images/bell_icon.png')} onPress={() => { }} />
            <ImageButton style={styles.headerButton} source={require('../../../../assets/images/menu_icon.png')} onPress={() => { }} />
        </Fragment>;
    };

    return <SafeAreaView edges={['right', 'left', 'top']} style={styles.screen}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <HeaderView title="Cryptomandu" headerButtons={headerButtons} />
            <BalanceCard onPress={() => navigation.navigate('current_balance')} />
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
    headerButton: {
        height: 24,
        width: 24,
        marginHorizontal: 8,
    },
});
