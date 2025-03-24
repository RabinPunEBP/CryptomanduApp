import { FunctionComponent } from 'react';
import { Image, Pressable, ImageSourcePropType } from 'react-native';

interface ImageButtonProps {
    style?: any,
    source: ImageSourcePropType;
    onPress: () => void;
}

const ImageButton: FunctionComponent<ImageButtonProps> = ({ style, source, onPress }: ImageButtonProps) => {
    return (
        <Pressable onPress={onPress}>
            <Image
                source={source}
                style={style}
            />
        </Pressable>
    );
};

export default ImageButton;
