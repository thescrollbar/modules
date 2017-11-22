import { AuthState, AuthData } from '../models/auth.model';
import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector
} from '@ngrx/store';

export const selectSlice = createFeatureSelector<AuthState>('auth');

export const selectData = createSelector(
  selectSlice,
  (slice) => slice.data
);

export const selectAuthenticationState = createSelector(
  selectSlice,
  (slice) => slice.authenticated
);
