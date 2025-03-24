import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import AppColors from '../../../assets/colors/AppColors';
import { HomeNavigationParams } from '../../../routers/HomeRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageButton from '../../../uicomponents/ImageButton';
import { ScrollView } from 'react-native-gesture-handler';
import { BalanceCard } from './BalanceCard';

interface HomeScreenProps {
    navigation: StackNavigationProp<HomeNavigationParams>,
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {

    console.log(navigation);

    return <SafeAreaView style={styles.screen}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Cryptomandu</Text>
            <View style={styles.headerButtons}>
                <ImageButton style={styles.headerButton} source={require('../../../assets/images/add_icon.png')} onPress={() => { }} />
                <ImageButton style={styles.headerButton} source={require('../../../assets/images/bell_icon.png')} onPress={() => { }} />
                <ImageButton style={styles.headerButton} source={require('../../../assets/images/menu_icon.png')} onPress={() => { }} />
            </View>
        </View>
        <ScrollView style={styles.scrollView}>
            <BalanceCard />
        </ScrollView>
    </SafeAreaView >;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors().default.background,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontFamily: 'Manrope-Bold',
        fontSize: 18,
        color: '#ffffff',
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerButton: {
        height: 24,
        width: 24,
        marginHorizontal: 8,
    },
    scrollView: {
        marginVertical: 16,
    },
    card: {
        borderRadius: 10,
        padding: 24,
    },
    cardTitle: {
        fontFamily: 'Manrope-Bold',
        fontSize: 14,
        color: '#ffffff',
    },
});
