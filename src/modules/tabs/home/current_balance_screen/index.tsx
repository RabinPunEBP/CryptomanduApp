import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import AppColors from '../../../../assets/colors/AppColors';
import { HomeNavigationParams } from '../../../../routers/HomeRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderView } from '../../../../uicomponents/HeaderView';
import { BalanceCard } from '../home_screen/BalanceCard';

interface CurrentBalanceScreenProps {
    navigation: StackNavigationProp<HomeNavigationParams>,
}

export const CurrentBalanceScreen = ({ navigation }: CurrentBalanceScreenProps) => {

    return <SafeAreaView edges={['right', 'left', 'top']} style={styles.screen}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <HeaderView title="Current Balance" onBackButtonPress={navigation.goBack} />
            <BalanceCard />
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
