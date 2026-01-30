import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../../contants/Colors';
import { useState } from 'react';
import Images from '../../assets/images';

type Props = {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  title?: string;
  errorMessage?: string;
};

const InputPassword = ({
  value,
  onChangeText,
  placeholder = 'Password',
  title = 'Password',
  errorMessage,
}: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={!isPasswordVisible}
          style={[
            styles.input_text,
            {
              borderColor: errorMessage ? COLORS.error_1 : COLORS.border_2,
            },
          ]}
        />
        <TouchableOpacity
          style={styles.toogle}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Image
            source={
              isPasswordVisible ? Images.password_hide : Images.password_show
            }
            style={styles.eye_icon}
          />
        </TouchableOpacity>
      </View>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export default InputPassword;

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
  toogle: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  eye_icon: {
    width: 20,
    height: 20,
  },
});
