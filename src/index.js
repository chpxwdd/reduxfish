import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
// import { store } from "./store/configureStore";
import configureStore from "./store/configureStore";

import registerServiceWorker from "./registerServiceWorker";

render(
  <div>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
