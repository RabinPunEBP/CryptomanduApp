import { StackNavigationProp } from '@react-navigation/stack';
import { Alert, StyleSheet, View } from 'react-native';
import AppColors from '../../../../assets/colors/AppColors';
import { HomeNavigationParams } from '../../../../routers/HomeRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderView } from '../../../../uicomponents/HeaderView';
import { CurrentBalanceCard } from './CurrentBalanceCard';
import { IncomeExpenseView } from './IncomeExpenseView';
import { DateSegmentedControl } from './DateSegmentedControl';
import { useEffect, useState } from 'react';
import { AreaChartView } from '../../../../uicomponents/AreaChartView';
import BarPairWithLine from '../../../../uicomponents/BarGraphView';
import { ChartSegmentedControl } from './ChartSegmentControl';
import ChartApiService, { GetChartDataResponse } from '../../../../api_services/ChartApiService';

interface CurrentBalanceScreenProps {
    navigation: StackNavigationProp<HomeNavigationParams>,
}

export const CurrentBalanceScreen = ({ navigation }: CurrentBalanceScreenProps) => {

    const [selectedIndex, setSelectedIndex] = useState(5);
    const [selectedChartIndex, setSelectedChartIndex] = useState(0);

    const [chartData, setChartData] = useState<GetChartDataResponse>();

    const { getChartdata } = ChartApiService();

    useEffect(() => {
        fetChartData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetChartData = async () => {
        try {
            const data = await getChartdata();
            setChartData(data);
        } catch (e) {
            Alert.alert('Chart data fetch failure.');
        }
    };

    return <SafeAreaView edges={['right', 'left', 'top']} style={styles.screen}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <HeaderView title="Current Balance" onBackButtonPress={navigation.goBack} />
            <View style={styles.body}>
                <CurrentBalanceCard />
                <ChartSegmentedControl
                    selectedIndex={selectedChartIndex}
                    setSelectedIndex={setSelectedChartIndex}
                    types={['Trend Chart', 'Income / Expense']}
                />
                {selectedChartIndex === 0 && chartData && <AreaChartView data={(chartData.area_chart.data)[selectedIndex]} />}
                {selectedChartIndex === 1 && chartData && <BarPairWithLine data={(chartData.line_chart.data)[selectedIndex]} />}
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
