import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ruleTypes } from 'gifted-charts-core';
import { BarChart } from 'react-native-gifted-charts';
import AppColors from '../assets/colors/AppColors';

export interface IncomeExpenseData {
    income: number,
    expense: number;
}

const convertDataToBarChartData = (data: IncomeExpenseData[]) => {
    const mappedGraphDataPoints = data.map((datum) => [{
        value: datum.income,
        frontColor: AppColors().semantics.success,
        gradientColor: AppColors().semantics.success,
        spacing: 2,
    },
    { value: datum.expense, frontColor: AppColors().semantics.failure, gradientColor: AppColors().semantics.failure }]);
    return mappedGraphDataPoints.flatMap((e) => e);
};

const BarGraphView = (props: BarGraphViewProps) => {
    const { width } = Dimensions.get('window');
    const data = convertDataToBarChartData(props.data);

    const barWidth = 20;

    return (
        <View>
            <View style={styles.infoContainer}>
                <View style={styles.flexContainer}>
                    <View style={{ ...styles.indicator, backgroundColor: AppColors().semantics.success }} />
                    <Text style={styles.text}>Income</Text>
                </View>
                <View style={styles.flexContainer}>
                    <View style={styles.indicator} />
                    <Text style={styles.text}>Expense</Text>
                </View>
            </View>
            <BarChart
                data={data}
                barWidth={barWidth}
                initialSpacing={0}
                spacing={((width - barWidth * 12 - 1 * 12) / 6)}
                barBorderRadius={4}
                showGradient
                rulesType={ruleTypes.SOLID}
                stepValue={500}
                maxValue={3000}
                hideYAxisText
                backgroundColor={AppColors().default.background}
                xAxisColor="#FFFFFF1F"
                rulesColor="#FFFFFF1F"
                width={width}
            />
        </View >
    );
};

interface BarGraphViewProps {
    data: IncomeExpenseData[];
}

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        width: '60%',
        padding: 10, borderRadius: 10,
        alignSelf: 'center',
        borderColor: AppColors().default.borderColor,
        borderWidth: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    indicator: {
        height: 7,
        width: 20,
        backgroundColor: AppColors().semantics.failure,
        borderRadius: 5,
    },
    text: {
        marginLeft: 10,
        color: AppColors().neutral.gray05,
        fontFamily: 'Manrope-Medium', fontSize: 10,
        textAlign: 'center',
    }
});

export default BarGraphView;
