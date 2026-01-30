import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import COLORS from '../../contants/Colors';

type Props = {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  backgroundColor?: ColorValue | undefined;
};
const Button = ({
  title,
  onPress = () => {},
  isDisabled = false,
  containerStyle = {},
  textStyle = {},
  backgroundColor = COLORS.blue_1,
}: Props) => {
  const getBackgroundColor = () => {
    if (isDisabled) {
      return COLORS.border_2;
    }
    return backgroundColor;
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        {
          backgroundColor: getBackgroundColor(),
        },
      ]}
      disabled={isDisabled}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: COLORS.blue_1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
  },
});
