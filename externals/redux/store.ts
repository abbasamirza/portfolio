import { configureStore, Reducer } from "@reduxjs/toolkit";
import { viewsSliceReducer, type View } from "./slices/views-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistPartial } from "redux-persist/es/persistReducer";

const viewsPersistConfig = {
  key: "views",
  storage,
};

const persistedViewsReducer: Reducer<View & PersistPartial> = persistReducer(
  viewsPersistConfig,
  viewsSliceReducer,
);

export const makeStore = () => {
  return configureStore({
    reducer: {
      views: persistedViewsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignoredActionsPaths: ["payload.data"],
        },
      }),
  });
};

export const store = makeStore();
export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
