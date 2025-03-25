import { Image, StyleSheet, Text, View } from 'react-native';
import AppColors from '../../../../../../assets/colors/AppColors';

export const AssetsListRow = (props: AssetsListRowProps) => {
    const { item } = props;
    return <View style={styles.itemContainer}>
        <View style={styles.itemImageDescriptionContainer}>
            <Image src={item.coinImgUrl} style={styles.itemImage} />
            <Text style={styles.itemDescription} numberOfLines={1} ellipsizeMode="tail">{item.description}</Text>
        </View>
        <Text style={{ ...styles.itemBalance, color: item.gain ? AppColors().semantics.success : AppColors().semantics.failure }}>${item.amount}</Text>
    </View>;
};

interface AssetsListRowProps {
    item: TransactionInformation;
}

export interface TransactionInformation {
    id: string;
    coinImgUrl: string;
    description: string;
    amount: string;
    gain: boolean;
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    itemImage: {
        width: 28,
        height: 28,
    },
    itemImageDescriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemDescription: {
        color: 'white',
        marginLeft: 8,
        width: '75%',
        fontFamily: 'Manrope-SemiBold',
        fontSize: 12,
    },
    itemBalance: {
        fontFamily: 'Manrope-SemiBold',
        fontSize: 12,
    },
});
