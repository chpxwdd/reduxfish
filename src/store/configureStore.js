import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import { createLogger } from "redux-logger";
import ThunkMiddleware from "redux-thunk";

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ThunkMiddleware, logger)
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
