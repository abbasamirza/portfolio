import { DefaultHomePageView } from "@/constants/views";
import { HomePageView } from "@/types/views";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type View = {
  homePageView: HomePageView;
};

const initialState: View = {
  homePageView: DefaultHomePageView,
} as const;

export type ViewKey = keyof View;

export type ViewUpdateAction<K extends ViewKey = ViewKey> = {
  page: K;
  view: View[K] | ((current: View[K]) => View[K]);
};

const viewsSlice = createSlice({
  name: "views",
  initialState,
  reducers: {
    setView: <K extends ViewKey>(
      state: View,
      action: PayloadAction<ViewUpdateAction<K>>,
    ) => {
      const { page, view } = action.payload;

      if (typeof view === "function") {
        // Handle updater function
        const currentView = state[page];
        state[page] = view(currentView);
      } else {
        // Handle direct view assignment
        state[page] = view;
      }
    },
  },
});

export const viewsSliceReducer = viewsSlice.reducer;
export const { setView } = viewsSlice.actions;
