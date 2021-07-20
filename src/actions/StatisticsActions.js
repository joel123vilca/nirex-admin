import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
// import StatisticsController from "../controllers/StatisticsController";

export const types = {
  GET_STATISTICS: "GET_STATISTICS",
  SET_STATISTICS: "SET_STATISTICS",
};

export const getStatistics = createAsyncThunk(
  types.GET_STATISTICS,
  async (_, { dispatch }) => {
    // const response = await StatisticsController.getStatistics();
    const response = "julio";
    dispatch(setStatistics(response));
    return response;
  }
);

export const setStatistics = createAction(
  types.SET_STATISTICS,
  (statistics) => ({
    payload: statistics,
  })
);
