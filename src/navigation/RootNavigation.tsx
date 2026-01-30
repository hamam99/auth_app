import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import StorageKey from '../contants/StorageKey';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import NonAuthNavigation from './NonAuthNavigation';
import { useAuth } from '../context/AuthContext';

const RootNavigation = () => {
  const { isAlreadyLogin } = useAuth();

  console.log(`isAlreadyLogin`, { isAlreadyLogin });
  return (
    <NavigationContainer>
      {isAlreadyLogin ? <AuthNavigation /> : <NonAuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
