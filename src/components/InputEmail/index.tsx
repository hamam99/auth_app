import { StyleSheet, Text, TextInput, View } from 'react-native';
import COLORS from '../../contants/Colors';

type Props = {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  title?: string;
  errorMessage?: string;
};

const InputEmail = ({
  value,
  onChangeText,
  placeholder = 'Email',
  title = 'Email',
  errorMessage,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={[
          styles.input_text,
          {
            borderColor: errorMessage ? COLORS.error_1 : COLORS.border_2,
          },
        ]}
      />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export default InputEmail;

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
  },
});
