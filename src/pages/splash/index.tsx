import { Image, StyleSheet, Text, View } from 'react-native';
import Images from '../../assets/images';
import COLORS from '../../contants/Colors';
import fontStyles from '../../styles/FontStyles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.app_icon} style={styles.logo} />

      <Text style={[styles.title, fontStyles.regular]}>Simple Auth App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 22,
    color: COLORS.blue_1,
  },
});
