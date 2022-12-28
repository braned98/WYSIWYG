import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  document: localStorage.getItem("currentDocument"),
  version: localStorage.getItem("currentVersion") || 0.1,
};

const routerState = { route: localStorage.getItem("router") || "Login" };

const routerSlice = createSlice({
  name: "router",
  initialState: routerState,
  reducers: {
    updateRoute(state, action) {
      state.route = action.payload;
      localStorage.setItem("router", action.payload);
    },
  },
});

const documentSlice = createSlice({
  name: "document",
  initialState: initialState,
  reducers: {
    setId(state, action) {
      state.document = action.payload;
    },
    setVersion(state, action){
        state.version = action.payload;
    }
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: {
    document: documentSlice.reducer,
    user: userSlice.reducer,
    router: routerSlice.reducer,
  },
});

export const documentActions = documentSlice.actions;
export const userActions = userSlice.actions;
export const routerActions = routerSlice.actions;

export default store;
