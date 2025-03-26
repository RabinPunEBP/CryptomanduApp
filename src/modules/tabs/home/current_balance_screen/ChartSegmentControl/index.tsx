import { Pressable, StyleSheet, Text, View } from 'react-native';
import AppColors from '../../../../../assets/colors/AppColors';

export const ChartSegmentedControl = (props: ChartSegmentedControlProps) => {

    const { types, selectedIndex, setSelectedIndex } = props;

    return <View style={styles.container}>
        {types.map((type, index) => {
            const isSelected = index === selectedIndex;
            return <Pressable onPress={() => setSelectedIndex(index)} key={type} style={{ ...styles.textContainer, borderBottomColor: isSelected ? AppColors().default.white : AppColors().default.borderColor }}>
                <Text style={{ ...styles.text, color: isSelected ? AppColors().default.white : AppColors().neutral.gray }}>
                    {type}
                </Text>
            </Pressable>;
        })}
    </View>;
};

interface ChartSegmentedControlProps {
    types: string[];
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    textContainer: {
        flex: 1,
        paddingVertical: 5,
        borderBottomWidth: 2,
    },
    text: {
        color: AppColors().brand.orange,
        textAlign: 'center',
        paddingVertical: 8,
        borderRadius: '25%',
        fontFamily: 'Manrope-SemiBold',
        fontSize: 14,
    },
});
