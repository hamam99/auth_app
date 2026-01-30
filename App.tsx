import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import ToastManager from 'toastify-react-native/components/ToastManager';
import { AuthProvider } from './src/context/AuthContext';

function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <AuthProvider>
        <RootNavigation />
        <ToastManager />
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
