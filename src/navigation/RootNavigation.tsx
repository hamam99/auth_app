import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import NonAuthNavigation from './NonAuthNavigation';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import Splash from '../pages/splash';

const RootNavigation = () => {
  const { isAlreadyLogin } = useAuth();
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isShowSplashScreen) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {isAlreadyLogin ? <AuthNavigation /> : <NonAuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
