import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import { AuthProvider } from './src/context/AuthContext';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <AuthProvider>
        <RootNavigation />
        <Toast />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
