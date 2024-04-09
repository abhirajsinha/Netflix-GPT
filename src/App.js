import React from "react";
import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore} style={{ height: "100%", width: "100vw" }}>
      <Body />
    </Provider>
  );
};

export default App;
