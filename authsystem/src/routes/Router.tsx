
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppwriteContext from '../appwrite/AppwriteContext';
import Loading from '../components/Loading';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';


export const Router = () => {
  const [isLoading,setisLoading] = useState<boolean>(true);
  const {appwrite,isLoggedIn,setIsLoggedIn} = useContext(AppwriteContext);
  useEffect(()=>{
    appwrite.getCurrentUser().then(response=>{
      setisLoading(false);
      if(response){
        setIsLoggedIn(true);
      }
    }).catch(_=>{
      setIsLoggedIn(false);
      setisLoading(false);
    });
  },[appwrite,setIsLoggedIn]);

  if(isLoading){
    return <Loading/>
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};
