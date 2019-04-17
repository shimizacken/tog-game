import throttleMiddleware from './throttleMiddleware';
import driveButtonMiddleware from '../../features/driveDashboard/state/driveButtonMiddleware';

export default [throttleMiddleware, driveButtonMiddleware];