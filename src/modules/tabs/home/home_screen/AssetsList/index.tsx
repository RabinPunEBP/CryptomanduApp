import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AssetsListRow, AssetInformation } from './AssetsListRow';
import AppColors from '../../../../../assets/colors/AppColors';
import { Typography } from '../../../../../styles/typography';
import { useAssetStore } from '../../../../../store/assets_store';

export const AssetsList = () => {

    const { assets } = useAssetStore();

    const renderItem = ({ item }: { item: AssetInformation; }) => {
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
            <FlatList scrollEnabled={false} showsHorizontalScrollIndicator={false} bounces={false} data={assets} renderItem={renderItem} keyExtractor={(item) => item.id} />
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
