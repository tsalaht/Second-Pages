import React, { createContext, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import League from "./Views/League";
import Detials from "./Views/Detials";
import Friends from "./Views/Friends";
import { Provider } from "react-redux";
const FontContext = createContext(false);
import { store } from "./Store/store";
import Orders from "./Views/Orders";
import New from "./Views/New";
import Banded from "./Views/Banded";
import Profile from "./Views/Profile";
export const useFont = () => useContext(FontContext);

export default function App() {
  let [fontsLoaded] = useFonts({
    Almarai_Regular: require("./assets/fonts/Almarai/Almarai-Regular.ttf"),
    Almarai_Bold: require("./assets/fonts/Almarai/Almarai-Bold.ttf"),
    Almarai_Light: require("./assets/fonts/Almarai/Almarai-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <FontContext.Provider value={fontsLoaded}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <League/> */}
          <Detials />
          {/* <Orders /> */}
          {/* <New /> */}
          {/* <Banded /> */}
          {/* <Profile /> */}
          {/* <Friends /> */}
        </View>
      </FontContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
