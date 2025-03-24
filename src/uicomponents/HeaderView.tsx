import { StyleSheet, Text, View } from 'react-native';
import ImageButton from './ImageButton';

export const HeaderView = () => {
    return <View style={styles.header}>
        <Text style={styles.headerTitle}>Cryptomandu</Text>
        <View style={styles.headerButtons}>
            <ImageButton style={styles.headerButton} source={require('../assets/images/add_icon.png')} onPress={() => { }} />
            <ImageButton style={styles.headerButton} source={require('../assets/images/bell_icon.png')} onPress={() => { }} />
            <ImageButton style={styles.headerButton} source={require('../assets/images/menu_icon.png')} onPress={() => { }} />
        </View>
    </View>;
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
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
});
