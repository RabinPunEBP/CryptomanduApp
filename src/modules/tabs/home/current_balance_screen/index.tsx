import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import AppColors from '../../../../assets/colors/AppColors';
import { HomeNavigationParams } from '../../../../routers/HomeRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderView } from '../../../../uicomponents/HeaderView';
import { CurrentBalanceCard } from './CurrentBalanceCard';
import { IncomeExpenseView } from './IncomeExpenseView';
import { DateSegmentedControl } from './DateSegmentedControl';
import { useState } from 'react';
import { AreaChartView } from '../../../../uicomponents/AreaChartView';

interface CurrentBalanceScreenProps {
    navigation: StackNavigationProp<HomeNavigationParams>,
}

export const CurrentBalanceScreen = ({ navigation }: CurrentBalanceScreenProps) => {

    const [selectedIndex, setSelectedIndex] = useState(5);

    const datas = [
        [
            { value: 10 },
            { value: 25 },
            { value: 20 },
            { value: 22 },
            { value: 17 },
            { value: 30 },
            { value: 30 },
        ],
        [
            { value: 20 },
            { value: 17 },
            { value: 10 },
            { value: 22 },
            { value: 25 },
            { value: 30 },
            { value: 30 },
        ],
        [
            { value: 10 },
            { value: 25 },
            { value: 20 },
            { value: 17 },
            { value: 30 },
            { value: 22 },
            { value: 30 },
        ],
        [
            { value: 20 },
            { value: 17 },
            { value: 25 },
            { value: 22 },
            { value: 10 },
            { value: 30 },
            { value: 30 },
        ],
        [
            { value: 10 },
            { value: 20 },
            { value: 17 },
            { value: 25 },
            { value: 22 },
            { value: 30 },
            { value: 30 },
        ],
        [
            { value: 10 },
            { value: 20 },
            { value: 25 },
            { value: 22 },
            { value: 17 },
            { value: 30 },
            { value: 30 },
        ],
    ];

    return <SafeAreaView edges={['right', 'left', 'top']} style={styles.screen}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <HeaderView title="Current Balance" onBackButtonPress={navigation.goBack} />
            <View style={styles.body}>
                <CurrentBalanceCard />
                <AreaChartView data={datas[selectedIndex]} />
                <DateSegmentedControl
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    dates={['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan']}
                />
                <IncomeExpenseView />
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
        paddingHorizontal: 0,
    },
});
