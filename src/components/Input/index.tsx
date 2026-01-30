import { StyleSheet, Text, TextInput, View } from 'react-native';
import COLORS from '../../contants/Colors';
import Fonts from '../../contants/Fonts';
import fontStyles from '../../styles/FontStyles';

type Props = {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  title?: string;
  errorMessage?: string;
};

const Input = ({
  value,
  onChangeText,
  placeholder = '',
  title = '',
  errorMessage,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, fontStyles.regular]}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={[
          styles.input_text,
          fontStyles.regular,
          {
            borderColor: errorMessage ? COLORS.error_1 : COLORS.border_2,
          },
        ]}
      />
      <Text style={[styles.error, fontStyles.regular]}>{errorMessage}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input_text: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border_2,
    paddingHorizontal: 4,
    height: 40,
  },
  error: {
    color: 'red',
    fontFamily: Fonts.regular,
  },
  title: {
    fontSize: 13,
  },
});
