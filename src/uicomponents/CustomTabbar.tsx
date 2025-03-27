import { View, Text, Image, StyleSheet, Pressable, StyleProp, ViewStyle } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppImages from '../assets/images/AppImages';
import AppColors from '../assets/colors/AppColors';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Typography } from '../styles/typography';

export default function CustomTabbar({ state, descriptors, navigation }: BottomTabBarProps) {
    const appColors = AppColors();
    const appImages = AppImages();
    console.log(state, descriptors);

    const { bottom } = useSafeAreaInsets();

    const getIcon = (type: string, isActive: boolean) => {
        console.log(type);
        console.log(appImages.tabs);
        switch (type) {
            case 'home': return isActive ? require('../assets/images/tabicons/home_selected.png') : require('../assets/images/tabicons/home.png');
            case 'trades': return isActive ? require('../assets/images/tabicons/trades_selected.png') : require('../assets/images/tabicons/trades.png');
            case 'market': return isActive ? require('../assets/images/tabicons/market_selected.png') : require('../assets/images/tabicons/market.png');
            case 'transactions': return isActive ? require('../assets/images/tabicons/transactions_selected.png') : require('../assets/images/tabicons/transactions.png');
        }
    };

    const routeName = getFocusedRouteNameFromRoute(state.routes[state.index]) ?? '';

    const tabStyle: StyleProp<ViewStyle> = { ...styles.tabbar, backgroundColor: appColors.default.background, display: (routeName === 'root' || routeName === '') ? 'flex' : 'none' };
    return (
        <View style={tabStyle}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = (options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name) as unknown as string;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabButton}
                    >

                        <>
                            {/*eslint-disable-next-line react-native/no-inline-styles*/}
                            {<View style={{ ...styles.halfPill, backgroundColor: isFocused ? 'white' : 'transparant' }} />}
                            <Image
                                source={getIcon(label, isFocused)}
                                style={styles.tabIcon} />
                            <Text style={{ ...styles.tabLabel, marginBottom: bottom, color: isFocused ? appColors.default.white : appColors.neutral.gray }}>
                                {TabType[label]}
                            </Text>
                        </>
                    </Pressable>
                );
            })}
        </View>
    );
}

const TabType: Record<string, string> = {
    home: 'OverView',
    trades: 'Trades',
    market: 'Market',
    transactions: 'Transactions',
};

export { TabType };

const styles = StyleSheet.create({
    tabbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        borderTopColor: '#3C3E46',
        borderTopWidth: 1,
    },
    tabButton: {
        flex: 1,
        maxWidth: 90,
        marginHorizontal: 5,
        overflow: 'hidden',
    },
    tabIcon: {
        height: 25,
        width: 25,
        marginTop: 10,
        marginBottom: 5,
        alignSelf: 'center',
    },
    tabLabel: {
        ...Typography.bold10,
        marginTop: 5,
        marginBottom: 10,
        alignSelf: 'center',
    },
    halfPill: {
        height: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        top: -5,
    },
});
