import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import COLORS from '../../contants/Colors';
import Button from '../../components/button';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';
import Images from '../../assets/images';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image source={Images.app_icon} style={styles.image} />
      <InputEmail title="Email" onChangeText={setEmail} value={email} />
      <InputPassword
        title="Password"
        onChangeText={setPassword}
        value={password}
      />

      <Button title="Login" onPress={() => {}} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 12,
    backgroundColor: 'white',
  },
  input_text: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border_2,
    paddingHorizontal: 4,
    height: 40,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 24,
  },
});
