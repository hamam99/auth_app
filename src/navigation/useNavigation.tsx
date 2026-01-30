import {
  NavigationProp,
  useNavigation as useNavigationRN,
} from '@react-navigation/native';
import RootStackParams from './RootStackParams';

const useNavigation = () => {
  const navigation = useNavigationRN<NavigationProp<RootStackParams>>();
  return navigation;
};

export default useNavigation;
