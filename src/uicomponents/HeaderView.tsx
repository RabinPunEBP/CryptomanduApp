import { StyleSheet, Text, View } from 'react-native';
import ImageButton from './ImageButton';

export const HeaderView = (props: HeaderViewProps) => {

    const { title, onBackButtonPress, headerButtons } = props;

    return <View style={styles.header}>
        <View style={styles.headerTitleContainer}>

            {
                onBackButtonPress &&
                <ImageButton style={styles.backButton} source={require('../assets/images/chevron_left_icon.png')} onPress={onBackButtonPress} />
            }
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
        {
            headerButtons &&
            <View style={styles.headerButtons}>
                {headerButtons()}
            </View>
        }
    </View>;
};

interface HeaderViewProps {
    title: string;
    onBackButtonPress?: () => void;
    headerButtons?: () => React.JSX.Element;
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    headerTitleContainer: {
        flexDirection: 'row',
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
    backButton: {
        height: 24,
        width: 24,
        marginRight: 16,
        paddingVertical: 4,
        resizeMode: 'contain',
    },
});
