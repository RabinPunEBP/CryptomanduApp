import React, { useCallback } from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabbar from '../uicomponents/CustomTabbar';
import AppColors from '../assets/colors/AppColors';
import NavigationBackground from '../uicomponents/base/NavigationBackground';
import HomeRouter from './HomeRouter';

const Tab = createBottomTabNavigator<TabsNavigationParams>();

export type TabsNavigationParams = {
    home: undefined;
    trades: undefined;
    market: undefined;
    transactions: undefined;
};

function TabsRouter() {
    const appColors = AppColors();

    const getTabbar = useCallback((props: BottomTabBarProps) => {
        return <CustomTabbar {...props} />;
    }, []);

    return <NavigationBackground>
        <Tab.Navigator
            tabBar={props => getTabbar(props)}
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: appColors.brand.red,
                tabBarInactiveTintColor: appColors.neutral.gray,
            }}
        >
            <Tab.Screen
                name="home"
            >
                {(_) => <HomeRouter />}
            </Tab.Screen>
            <Tab.Screen
                name="trades"
            >
                {(_) => <HomeRouter />}
            </Tab.Screen>
            <Tab.Screen
                name="market"
            >
                {(_) => <HomeRouter />}
            </Tab.Screen>
            <Tab.Screen
                name="transactions"
            >
                {(_) => <HomeRouter />}
            </Tab.Screen>
        </Tab.Navigator >
    </NavigationBackground>;
}

export default TabsRouter;
