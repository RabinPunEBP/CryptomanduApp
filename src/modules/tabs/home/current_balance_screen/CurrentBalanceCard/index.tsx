import { Image, StyleSheet, Text, View } from 'react-native';
import AppColors from '../../../../../assets/colors/AppColors';
import { Typography } from '../../../../../styles/typography';
import { useUserStore } from '../../../../../store/user_store';
import { formatNumberWithDecimals } from '../../../../../helpers/currency_formatter';

export const CurrentBalanceCard = () => {

    const { portfolio } = useUserStore();

    return <View style={styles.card}>
        <Text style={styles.balance} >
            ${formatNumberWithDecimals(portfolio.current_balance)}
        </Text>
        <View style={styles.growth}>
            <Image source={require('../../../../../assets/images/status_down_red_icon.png')} style={styles.icon} />
            <Text style={{ ...styles.caption, color: AppColors().semantics.failure }} >
                {' '}${portfolio.income.last_month.toLocaleString()} ({portfolio.percent_change}%)
            </Text>
            <Text style={styles.caption} >
                {' '}since last month
            </Text>
        </View>
    </View>
        ;
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        alignItems: 'center',
    },
    growth: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    balance: {
        ...Typography.semiBold42,
        color: 'white',
    },
    caption: {
        ...Typography.medium14,
        color: AppColors().neutral.gray05,
    },
    icon: {
        height: 14,
        width: 14,
    },
});

