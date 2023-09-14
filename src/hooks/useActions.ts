import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { carouselSlice } from "@/store/carousel/carousel.slice";
import { useMemo } from "react";

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(carouselSlice.actions, dispatch),
    [dispatch]
  );
};

export default useActions;
