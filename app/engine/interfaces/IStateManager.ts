import { IState } from "./IState";

export interface IStateManager {

    registerState(state: IState): void;

    setState(stateName: string): void;

    getCurrentState(): IState;
    
}