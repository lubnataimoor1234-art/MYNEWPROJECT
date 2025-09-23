import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn, setToken, selectIsLoggedIn } from "../store/reducers/auth-persist.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Tab from "./Tab.navigation";
import MainNavigation from "./Main.Navigation";


const BaseNavigation: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log("BaseNavigation - isLoggedIn:", isLoggedIn);

  useEffect(() => {
    const restoreSession = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        dispatch(setToken(token));
        dispatch(setIsLoggedIn(true));
      }
    };
    restoreSession();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <Tab /> : <MainNavigation />}
    </NavigationContainer>
  );
};

export default BaseNavigation;
