
import { LogActions, LogActionTypes } from '../actions/log.actions';

export const logFeatureKey = 'log';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: LogActions): State {
  switch (action.type) {

    case LogActionTypes.LoadLogs:
      return state;

    default:
      return state;
  }
}
