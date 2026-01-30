import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../../contants/Colors';
import Button from '../../components/button';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';
import Images from '../../assets/images';
import useNavigation from '../../navigation/useNavigation';
import RouteName from '../../navigation/RouteName';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigation().navigate;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.app_icon} style={styles.image} />
      <InputEmail title="Email" onChangeText={setEmail} value={email} />
      <InputPassword
        title="Password"
        onChangeText={setPassword}
        value={password}
      />

      <Button title="Login" onPress={() => {}} />
      <TouchableOpacity onPress={() => navigate(RouteName.REGISTER)}>
        <Text style={styles.register_text}>Create New Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  register_text: {
    color: COLORS.blue_1,
    textAlign: 'center',
    marginTop: 12,
    fontSize: 13,
  },
});
