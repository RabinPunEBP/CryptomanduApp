import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AssetsListRow, TransactionInformation } from './AssetsListRow';
import AppColors from '../../../../../assets/colors/AppColors';
import { Typography } from '../../../../../styles/typography';

export const AssetsList = () => {

    const data: TransactionInformation[] = [
        {
            id: '0',
            coinImgUrl: 'https://cryptologos.cc/logos/thumbs/bitcoin.png?v=040',
            description: 'Lorem iopusm ewefihbv hiev cihwbvbhwbvehb',
            amount: '10000',
            gain: false,
        },
        {
            id: '1',
            coinImgUrl: 'https://cryptologos.cc/logos/thumbs/ethereum.png?v=040',
            description: 'Lorem iopusm ewefihbv hiev cihwbvbhwbvehb',
            amount: '10000',
            gain: true,
        },
        {
            id: '2',
            coinImgUrl: 'https://cryptologos.cc/logos/thumbs/usd-coin.png?v=040',
            description: 'Lorem iopusm ewefihbv hiev cihwbvbhwbvehb',
            amount: '10000',
            gain: false,
        },
        {
            id: '3',
            coinImgUrl: 'https://cryptologos.cc/logos/thumbs/tether.png?v=040',
            description: 'Lorem iopusm ewefihbv hiev cihwbvbhwbvehb',
            amount: '10000',
            gain: true,
        },
        {
            id: '4',
            coinImgUrl: 'https://cryptologos.cc/logos/thumbs/solana.png?v=040',
            description: 'Lorem iopusm ewefihbv hiev cihwbvbhwbvehb',
            amount: '10000',
            gain: false,
        },
    ];

    const renderItem = ({ item }: { item: TransactionInformation; }) => {
        return <AssetsListRow item={item} />;
    };

    return <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Assets</Text>
            <Pressable>
                <Text style={styles.showLess}>See all</Text>
            </Pressable>
        </View>
        <LinearGradient
            colors={['#25282F', '#1A1C21']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.contentContainer}
        >
            <FlatList scrollEnabled={false} showsHorizontalScrollIndicator={false} bounces={false} data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </LinearGradient>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    contentContainer: {
        borderRadius: 8,
        borderColor: AppColors().default.borderColor,
        borderWidth: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        paddingVertical: 8,
        ...Typography.bold14,
    },
    showLess: {
        paddingVertical: 8,
        ...Typography.semiBold12,
        color: AppColors().neutral.gray05,
    },
});
