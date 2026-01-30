import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import ToastManager from 'toastify-react-native/components/ToastManager';

function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <RootNavigation />
      <ToastManager />
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
