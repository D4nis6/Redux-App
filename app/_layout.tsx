import { Stack } from "expo-router";
import {Provider} from "react-redux";
import store from "../components/redux/store.js"


export default function RootLayout() {
  return (
    <Provider store={store}>
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
    </Stack>
    </Provider>

  );
}
