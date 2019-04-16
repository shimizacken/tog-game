import { createFakedMiddleware } from '../../../../../__mocks__/middleware';
import { driveDashboardMiddleware } from '../middleware';

describe('driveDashboardMiddleware test suite', () => {
    const testNextFunction = (next, action) => {
      expect(next).toHaveBeenCalledWith(action);
      expect(next).toHaveBeenCalledTimes(1);
    };
  
    describe('default next call', () => {
      it('should passes through non-function action', () => {
        const { next, invoke } = createFakedMiddleware(driveDashboardMiddleware);
        const action = { type: '@@test-type' };
  
        invoke(action);
  
        testNextFunction(next, action);
      });
    });
});