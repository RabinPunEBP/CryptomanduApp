import { Pressable, StyleSheet, Text, View } from 'react-native';
import AppColors from '../../../../../assets/colors/AppColors';
import { Typography } from '../../../../../styles/typography';

export const DateSegmentedControl = (props: DateSegmentedControlProps) => {

    const { dates, selectedIndex, setSelectedIndex } = props;

    return <View style={styles.container}>
        {dates.map((date, index) => {
            const isSelected = index === selectedIndex;
            return <Pressable onPress={() => setSelectedIndex(index)} key={date} style={styles.textContainer}>
                <Text style={{ ...styles.text, backgroundColor: isSelected ? AppColors().brand.orange8 : AppColors().default.background, color: isSelected ? AppColors().brand.orange : AppColors().neutral.gray05 }}>
                    {date}
                </Text>
            </Pressable>;
        })}
    </View>;
};

interface DateSegmentedControlProps {
    dates: string[];
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        paddingVertical: 8,
        borderRadius: '25%',
        ...Typography.semiBold10,
    },
});
