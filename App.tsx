import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';

function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
