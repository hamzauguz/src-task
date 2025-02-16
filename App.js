import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import RoutesApp from "./src/routes/RoutesApp";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RoutesApp />
      </NavigationContainer>
    </Provider>
  );
}
