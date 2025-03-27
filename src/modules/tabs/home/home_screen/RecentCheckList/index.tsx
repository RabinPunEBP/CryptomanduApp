import { LayoutChangeEvent, LayoutRectangle, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { CheckListRow } from './CheckListRow';
import { useState } from 'react';
import AppColors from '../../../../../assets/colors/AppColors';
import { Typography } from '../../../../../styles/typography';

export const RecentCheckList = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [size, setSize] = useState<Pick<LayoutRectangle, 'width' | 'height'>>({ width: 0, height: 0 });
    const top = useSharedValue(0);
    const width = useSharedValue(0);
    const [height, setHeight] = useState(0);

    const onLayout = (e: LayoutChangeEvent) => {
        const rect = e.nativeEvent.layout;
        setSize(rect);
        width.value = rect.width - 10;
    };

    const onContainerLayout = (e: LayoutChangeEvent) => {
        if (!height) {
            setHeight(e.nativeEvent.layout.height + 10);
        }
    };

    const open = () => {
        top.value = withSpring(size.height, { duration: 1200 });
        width.value = withSpring(size.width, { duration: 700 });
        setIsExpanded(true);
    };

    const close = () => {
        top.value = withSpring(0, { duration: 1000 });
        width.value = withSpring(size.width - 10, { duration: 700 });
        setIsExpanded(false);
    };

    return <Pressable style={styles.mainContainer} onPress={open} onLayout={onContainerLayout}>
        <View
            {...(height && { style: { height: isExpanded ? height + size.height : height } })}
        >
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Recent checklist</Text>
                {
                    isExpanded &&
                    <Pressable onPress={close}>
                        <Text style={styles.showLess}>Show less</Text>
                    </Pressable>
                }
            </View>
            <View>
                {/* eslint-disable-next-line react-native/no-inline-styles*/}
                <Animated.View style={{ position: 'absolute', width, marginTop: 10, top, alignSelf: 'center' }}>
                    <View>
                        <CheckListRow title="Duplicate Transactions" description="4 duplicate transactions found." />
                    </View>
                </Animated.View>
                <Pressable onPress={open} onLayout={onLayout}>
                    <CheckListRow title="Review Transactions" description="128 transactions review is pending." />
                </Pressable>

            </View>
        </View>
    </Pressable >;
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 16,
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
        ...Typography.medium11,
        color: AppColors().semantics.warning,
    },
});
