import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../assets/images';
import COLORS from '../../contants/Colors';
import Button from '../../components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageKey from '../../contants/StorageKey';

const Home = () => {
  const onLogout = () => {
    AsyncStorage.setItem(StorageKey.IS_ALREADY_LOGIN, 'false');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.user} style={styles.image} />
      <View>
        <Text style={styles.text}>Welcome back, User</Text>
        <Text style={styles.text}>user@example.com</Text>
      </View>
      <Button
        title="Logout"
        backgroundColor={COLORS.error_1}
        onPress={() => {}}
        containerStyle={styles.logout}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.white,
    gap: 12,
  },
  image: {
    width: 64,
    height: 64,
  },
  text: {
    textAlign: 'center',
  },
  logout: {
    width: 300,
  },
});
