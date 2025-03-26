import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import { LineChart, ruleTypes } from 'react-native-gifted-charts';
import AppColors from '../assets/colors/AppColors';


export const AreaChartView = (props: AreaChartViewProps) => {
    const { width } = Dimensions.get('window');

    return <View style={styles.container}>
        <LineChart
            areaChart
            curved
            hideDataPoints
            isAnimated
            animationDuration={1200}
            startFillColor="#FFCB74"
            startOpacity={0.2}
            endOpacity={0}
            initialSpacing={0}
            endSpacing={0}
            data={props.data}
            spacing={width / 6}
            thickness={2}
            yAxisColor={AppColors().default.background}
            rulesType={ruleTypes.SOLID}
            rulesColor="#FFFFFF1F"
            hideYAxisText
            xAxisColor="#FFFFFF1F"
            yAxisIndicesColor="#FFFFFF1F"
            color="#FFCB74"
            width={width}
            showYAxisIndices={true}
        />
    </View>;
};

interface AreaChartViewProps {
    data: { value: number; }[];
}

const styles = StyleSheet.create({
    container: {
        marginLeft: -10,
        marginBottom: -10,
    },
});
