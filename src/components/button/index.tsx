import {
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
};
const Button = ({
  title,
  onPress = () => {},
  isDisabled = false,
  containerStyle = {},
  textStyle = {},
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
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
