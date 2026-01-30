import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import Home from '../pages/home';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.HOME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
