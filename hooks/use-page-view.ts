"use client";

import { useAppSelector } from "@/externals/redux/hooks";
import {
  setView,
  ViewUpdateAction,
} from "@/externals/redux/slices/views-slice";
import { useDispatch } from "react-redux";

export const usePageView = () => {
  const dispatch = useDispatch();
  const views = useAppSelector((state) => state.views);

  const setPageView = <T extends ViewUpdateAction>(action: T) => {
    dispatch(setView(action));
  };

  return {
    ...views,
    setPageView,
  };
};
