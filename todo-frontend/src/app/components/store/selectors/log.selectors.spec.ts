import * as fromLog from '../reducers/log.reducer';
import { selectLogState } from './log.selectors';

describe('Log Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLogState({
      [fromLog.logFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
