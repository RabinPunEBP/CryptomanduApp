import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../modules/tabs/home/home_screen';
import { CurrentBalanceScreen } from '../modules/tabs/home/current_balance_screen';

const Stack = createStackNavigator<HomeNavigationParams>();

export type HomeNavigationParams = {
    root: undefined;
    current_balance: undefined;
};

export default function HomeRouter() {

    return <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="root" >
            {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="current_balance" >
            {(props) => <CurrentBalanceScreen {...props} />}
        </Stack.Screen>
    </Stack.Navigator>;
}
