import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import AppColors from '../../../../assets/colors/AppColors';
import { HomeNavigationParams } from '../../../../routers/HomeRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderView } from '../../../../uicomponents/HeaderView';
import { CurrentBalanceCard } from './CurrentBalanceCard';

interface CurrentBalanceScreenProps {
    navigation: StackNavigationProp<HomeNavigationParams>,
}

export const CurrentBalanceScreen = ({ navigation }: CurrentBalanceScreenProps) => {

    return <SafeAreaView edges={['right', 'left', 'top']} style={styles.screen}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <HeaderView title="Current Balance" onBackButtonPress={navigation.goBack} />
            <View style={styles.body}>
                <CurrentBalanceCard />
            </View>
        </ScrollView>
    </SafeAreaView >;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors().default.background,
    },
    scrollView: {
        marginVertical: 16,
    },
    body: {
        paddingHorizontal: 16,
    },
});
