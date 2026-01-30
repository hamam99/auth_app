import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../assets/images';
import Colors from '../../constants/Colors';
import Button from '../../components/button';
import { useAuth } from '../../context/AuthContext';
import fontStyles from '../../styles/FontStyles';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.user} style={styles.image} />
      <View>
        <Text style={[styles.text, styles.textName, fontStyles.regular]}>
          Welcome back,{' '}
          <Text style={[styles.textNameBold, fontStyles.bold]}>
            {user?.name}
          </Text>
        </Text>
        <Text style={[styles.text, fontStyles.regular]}>{user?.email}</Text>
      </View>
      <Button
        title="Logout"
        backgroundColor={Colors.error_1}
        onPress={logout}
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
    backgroundColor: Colors.white,
    gap: 12,
  },
  image: {
    width: 64,
    height: 64,
  },
  text: {
    textAlign: 'center',
  },
  textName: {
    fontSize: 16,
  },
  textNameBold: {
    fontWeight: 'bold',
  },
  logout: {
    width: 300,
  },
});
