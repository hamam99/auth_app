import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useNavigation from '../../navigation/useNavigation';
import Images from '../../assets/images';
import InputPassword from '../../components/InputPassword';
import Input from '../../components/Input';
import Button from '../../components/button';
import Toast from 'react-native-toast-message';
import COLORS from '../../contants/Colors';
import RouteName from '../../navigation/RouteName';
import { RegisterSchema, RegisterType } from '../../schema/RegisterSchema';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../context/AuthContext';
import fontStyles from '../../styles/FontStyles';

const Register = () => {
  const { goBack, navigate } = useNavigation();
  const { register } = useAuth();

  const {
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: RegisterType) => {
    Toast.show({
      type: 'success',
      text1: 'Success register.',
      text2: 'Try to login.',
    });
    goBack();
    register(data);
  };

  const gotoLogin = () => {
    navigate(RouteName.LOGIN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={Images.back} style={styles.back} />
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              title="Name"
              onChangeText={onChange}
              value={value}
              errorMessage={errors?.name?.message}
              placeholder="Name"
            />
          )}
          name="name"
        />
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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <InputPassword
              title="Password Confirmation"
              onChangeText={onChange}
              value={value}
              errorMessage={errors?.passwordConfirm?.message}
            />
          )}
          name="passwordConfirm"
        />
        <Button
          title="Register"
          onPress={handleSubmit(onSubmit)}
          isDisabled={!isDirty || !isValid}
        />

        <TouchableOpacity onPress={gotoLogin}>
          <Text style={[styles.login_text, fontStyles.regular]}>
            Go to Login
          </Text>
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
    backgroundColor: 'white',
  },
  back: {
    width: 16,
    height: 16,
  },
  subContainer: {
    flex: 1,
    paddingTop: 32,
  },
  login_text: {
    color: COLORS.blue_1,
    textAlign: 'center',
    marginTop: 12,
    fontSize: 13,
  },
});
