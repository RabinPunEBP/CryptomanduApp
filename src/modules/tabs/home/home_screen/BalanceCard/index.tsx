/* eslint-disable react-native/no-inline-styles */
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../../../../../assets/colors/AppColors';

export const BalanceCard = () => {
    const { width } = Dimensions.get('screen');
    const imageWidth = width * 1.5;

    return <LinearGradient
        colors={['#3C3E46', '#25282F']}
        start={{ x: 0.7, y: 0 }}
        end={{ x: 0.3, y: 1 }}
        style={styles.gradientView}
    >
        <View style={styles.card}>
            <Image source={require('../../../../../assets/images/background_image.png')} style={{ position: 'absolute', height: imageWidth, width: imageWidth, resizeMode: 'contain', top: (-imageWidth * 0.78), right: (-imageWidth * 0.45) }} />
            <Text style={styles.cardTitle}>Current Balance</Text>
            <View style={{ ...styles.flexRowCenter, marginVertical: 12 }}>
                <Text style={styles.balance}>$49K</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.statusContainer}>
                        <Image source={require('../../../../../assets/images/status_down_icon.png')} style={styles.statusIcon} />
                        <Text style={styles.statusText}>$9,600</Text>
                    </View>
                    <Text style={styles.statusText}>since last month</Text>
                </View>
            </View>
            <View style={styles.incomeExpenditureContainer}>
                <View style={{ flex: 1, ...styles.flexRowCenter }}>
                    <Image source={require('../../../../../assets/images/income_icon.png')} style={styles.incomeIcon} />
                    <View style={{ marginLeft: 6 }}>
                        <Text style={styles.incomeText}>Income</Text>
                        <Text style={styles.incomeBalance}>$9,600</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 16, flex: 1, ...styles.flexRowCenter }}>
                    <Image source={require('../../../../../assets/images/income_icon.png')} style={styles.incomeIcon} />
                    <View style={{ marginLeft: 6 }}>
                        <Text style={styles.incomeText}>Income</Text>
                        <Text style={styles.incomeBalance}>$9,600</Text>
                    </View>
                </View>
            </View>
        </View>
    </LinearGradient>;
};

const styles = StyleSheet.create({
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    gradientView: {
        borderRadius: 10,
        borderColor: '#FFFFFF14',
        borderWidth: 1,
    },
    card: {
        padding: 24,
    },
    cardTitle: {
        fontFamily: 'Manrope-Bold',
        fontSize: 14,
        color: '#ffffff',
    },
    balance: {
        fontFamily: 'Manrope-SemiBold',
        fontSize: 40,
        color: '#ffffff',
    },
    statusContainer: {
        backgroundColor: AppColors().semantics.failure,
        flexDirection: 'row',
        padding: 6,
        paddingHorizontal: 8,
        marginLeft: 16,
        borderRadius: 16,
        alignItems: 'center',
    },
    statusIcon: {
        height: 12,
        width: 12,
    },
    statusText: {
        paddingLeft: 4,
        fontFamily: 'Manrope-Medium',
        fontSize: 11,
        color: '#ffffff',
    },
    incomeExpenditureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
    },
    incomeIcon: {
        height: 36,
        width: 36,
    },
    incomeText: {
        fontFamily: 'Manrope-Regular',
        fontSize: 11,
        color: '#ffffff',
    },
    incomeBalance: {
        fontFamily: 'Manrope-Bold',
        fontSize: 14,
        color: '#ffffff',
    },
});
