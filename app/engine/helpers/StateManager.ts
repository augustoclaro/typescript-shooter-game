import { IStateManager } from "../interfaces/IStateManager";
import { IState } from "../interfaces/IState";

export class StateManager implements IStateManager {

    private knownStates: IState[] = [];
    private currentState: IState;
    
    registerState(state: IState): void {
        if (this.knownStates.some(s => s.name === state.name))
            throw new Error(`State '${state.name}' already exists.`);
        this.knownStates.push(state);
    }

    setState(stateName: string): void {
        const state = this.knownStates.filter(s => s.name === stateName)[0];
        if (!state)
            throw new Error(`State '${stateName}' doesn't exists.`);
        
        // If there's a state active, run it's destroy method if any
        if (this.currentState && this.currentState.onDetroy)
            this.currentState.onDetroy();
            
        this.currentState = new (Object.getPrototypeOf(state).constructor);

        // Running state init method if any
        this.currentState.onInit && this.currentState.onInit();
    }

    getCurrentState(): IState {
        return this.currentState;
    }

}