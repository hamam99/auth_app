import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import StorageKey from '../contants/StorageKey';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import NonAuthNavigation from './NonAuthNavigation';

const RootNavigation = () => {
  const [isAlreadyLogin, setIsAlreadyLogin] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(StorageKey.IS_ALREADY_LOGIN).then(value => {
      setIsAlreadyLogin(value === 'true');
    });
  }, []);

  return (
    <NavigationContainer>
      {isAlreadyLogin ? <AuthNavigation /> : <NonAuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
