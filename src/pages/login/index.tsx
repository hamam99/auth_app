import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import COLORS from '../../contants/Colors';
import Button from '../../components/button';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import Images from '../../assets/images';
import useNavigation from '../../navigation/useNavigation';
import RouteName from '../../navigation/RouteName';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, LoginType } from '../../schema/LoginSchema';

const Login = () => {
  const navigate = useNavigation().navigate;

  const handleSignUp = () => {
    navigate(RouteName.REGISTER);
  };

  const {
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: LoginType) => {
    console.log(`submit`, {
      data,
    });
    navigate(RouteName.HOME);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.app_icon} style={styles.image} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            title="Email"
            placeholder="Email"
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.email?.message}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <InputPassword
            title="Password"
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.password?.message}
          />
        )}
        name="password"
      />

      <Button
        title="Login"
        onPress={handleSubmit(onSubmit)}
        isDisabled={!isDirty || !isValid}
      />
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.register_text}>Go to Signup</Text>
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
