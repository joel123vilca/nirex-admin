import { createSelector } from "@reduxjs/toolkit";

export const statisticsStateSelector = createSelector(
  (state) => state.statistics,
  (statistics) => statistics
);

export const statisticsSelector = createSelector(
  statisticsStateSelector,
  (state) => state.statistics
);
