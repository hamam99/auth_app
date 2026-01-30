import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import Register from '../pages/register';
import Login from '../pages/login';
import Home from '../pages/home';

const Stack = createNativeStackNavigator();
const NonAuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.LOGIN} component={Login} />
      <Stack.Screen name={RouteName.REGISTER} component={Register} />
      <Stack.Screen name={RouteName.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default NonAuthNavigation;
