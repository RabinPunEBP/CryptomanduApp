import { Image, StyleSheet, Text, View } from 'react-native';
import AppColors from '../../../../../assets/colors/AppColors';

export const CurrentBalanceCard = () => {
    return <View style={styles.card}>
        <Text style={styles.balance} >
            $49,000.00
        </Text>
        <View style={styles.growth}>
            <Image source={require('../../../../../assets/images/status_down_red_icon.png')} style={{ height: 14, width: 14 }} />
            <Text style={{ ...styles.caption, color: AppColors().semantics.failure }} >
                {' '}$9,600.00 (-5.1%)
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
        fontFamily: 'Manrope-SemiBold',
        fontSize: 42,
        color: 'white',
    },
    caption: {
        fontFamily: 'Manrope-Medium',
        fontSize: 14,
        color: AppColors().neutral.gray05,
    },
});

