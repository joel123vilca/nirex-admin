import { createReducer } from "@reduxjs/toolkit";

import * as statisticsActions from ".././actions/StatisticsActions";

const initialState = {
  statistics: null,
};

const StatisticsReducer = createReducer(initialState, (builder) => {
  builder.addCase(statisticsActions.setStatistics, (state, { payload }) => ({
    ...state,
    statistics: payload,
  }));
});

export default StatisticsReducer;
