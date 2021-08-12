import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Text>1111111</Text>
      </Provider>

    </NavigationContainer>
  );
}

{/*<PersistGate loading={null} persistor={persistor}>*/
}
{/*</PersistGate>*/
}
