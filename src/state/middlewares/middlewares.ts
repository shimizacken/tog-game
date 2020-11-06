import { throttleMiddleware } from "./throttleMiddleware";
import { driveButtonMiddleware } from "../../features/driveDashboard/state/driveButtonMiddleware";

export const middlewares = [throttleMiddleware, driveButtonMiddleware];
