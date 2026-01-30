import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useNavigation from '../../navigation/useNavigation';
import Images from '../../assets/images';
import { useState } from 'react';
import InputPassword from '../../components/InputPassword';
import InputEmail from '../../components/InputEmail';
import Button from '../../components/button';
import { Toast } from 'toastify-react-native';
import COLORS from '../../contants/Colors';
import RouteName from '../../navigation/RouteName';

const Register = () => {
  const { goBack, navigate } = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onRegister = () => {
    Toast.show({
      type: 'success',
      text1: 'Success register.',
      text2: 'Try to login.',
    });
    goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={Images.back} style={styles.back} />
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <InputEmail title="Email" onChangeText={setEmail} value={email} />
        <InputPassword
          title="Password"
          onChangeText={setPassword}
          value={password}
        />
        <InputPassword
          title="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Button title="Register" onPress={onRegister} />

        <TouchableOpacity onPress={() => navigate(RouteName.LOGIN)}>
          <Text style={styles.login_text}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: 'white',
  },
  back: {
    width: 16,
    height: 16,
  },
  subContainer: {
    flex: 1,
    gap: 16,
    paddingTop: 32,
  },
  login_text: {
    color: COLORS.blue_1,
    textAlign: 'center',
    marginTop: 12,
    fontSize: 13,
  },
});
