import AppColors from '../../assets/colors/AppColors';
import { View } from 'react-native';

interface NavigationBackgroundProps {
    color?: string;
    children: any;
}

export default function NavigationBackground({ color, children }: NavigationBackgroundProps) {
    const appColors = AppColors();
    return <View style={{ flex: 1, backgroundColor: color ?? appColors.default.background }}>{children}</View>;
}