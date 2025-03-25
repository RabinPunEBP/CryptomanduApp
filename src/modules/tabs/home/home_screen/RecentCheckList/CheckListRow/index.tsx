import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../../../../../../assets/colors/AppColors';

export const CheckListRow = (props: CHeckListRowProps) => {
    const { title, description } = props;
    return <LinearGradient
        colors={['#25282F', '#1A1C21']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
    >
        <View style={styles.contentContainer}>
            <View style={styles.flexRowCenter}>
                <Image style={styles.transactionIcon} source={require('../../../../../../assets/images/review_transactions_icon.png')} />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.caption}>{description}</Text>
                </View>
            </View>
            <Image style={styles.chevronIcon} source={require('../../../../../../assets/images/chevron_right_icon.png')} />
        </View>
    </LinearGradient>;
};

interface CHeckListRowProps {
    title: string,
    description: string;
}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    gradient: {
        borderRadius: 8,
        borderColor: AppColors().default.borderColor,
        borderWidth: 1,
    },
    title: {
        fontFamily: 'Manrope-Bold',
        fontSize: 14,
        color: '#ffffff',
    },
    caption: {
        fontFamily: 'Manrope-Medium',
        fontSize: 11,
        color: '#ffffff',
    },
    transactionIcon: {
        height: 36,
        width: 36,
        marginRight: 8,
    },
    chevronIcon: {
        height: 24,
        width: 24,
        padding: 5,
        resizeMode: 'contain',
    },
});
