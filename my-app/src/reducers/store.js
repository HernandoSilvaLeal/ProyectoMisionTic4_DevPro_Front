import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

import reducer from "../reducers";

export const store = createStore(reducer, {}, applyMiddleware(reduxThunk));
