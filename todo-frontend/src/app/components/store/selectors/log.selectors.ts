import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLog from '../reducers/log.reducer';

export const selectLogState = createFeatureSelector<fromLog.State>(
  fromLog.logFeatureKey
);
