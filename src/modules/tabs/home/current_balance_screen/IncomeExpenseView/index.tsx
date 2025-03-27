import { Image, StyleSheet, Text, View } from 'react-native';
import AppColors from '../../../../../assets/colors/AppColors';
import { Typography } from '../../../../../styles/typography';
import { useUserStore } from '../../../../../store/user_store';


const IncomeView = (props: IncomeViewProps) => {
    const { title, amount, growth, hasBorder } = props;
    // eslint-disable-next-line react-native/no-inline-styles
    return (<View style={{ ...styles.mainContainer, borderTopWidth: hasBorder ? 2 : 0 }}>
        <View style={styles.topContainer}>
            <Text style={styles.status} >
                {title}
            </Text>
            <Text style={styles.balance} >
                {amount}
            </Text>
        </View>
        <View style={styles.bottomContainer}>
            <Image source={require('../../../../../assets/images/status_up_green_icon.png')} style={styles.image} />
            <Text style={{ ...styles.caption, color: AppColors().semantics.success }} >
                {growth} {' '}
            </Text>
            <Text style={styles.caption} >
                {' '}since last month
            </Text>
        </View>
    </View>);
};

interface IncomeViewProps {
    title: string,
    amount: string;
    growth: string;
    hasBorder?: boolean;
}

export const IncomeExpenseView = () => {

    const { portfolio } = useUserStore();

    return <View style={styles.card}>
        <IncomeView title="Income" amount={`$${portfolio.income.last_month.toLocaleString()}`} growth={`$${portfolio.income.change.toLocaleString()}`} />
        <IncomeView title="Expense" amount={`$${portfolio.expense.last_month.toLocaleString()}`} growth={`$${portfolio.expense.change.toLocaleString()}`} />
    </View>;
};


const styles = StyleSheet.create({
    card: {
        marginTop: 16,
        padding: 16,
    },
    status: {
        ...Typography.medium14,
        color: 'white',
    },
    balance: Typography.bold14,
    caption: {
        ...Typography.medium11,
        color: AppColors().neutral.gray05,
    },
    image: {
        height: 14,
        width: 14,
    },
    mainContainer: {
        paddingVertical: 16,
        borderColor: AppColors().default.borderColor,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 6,
    },
});

