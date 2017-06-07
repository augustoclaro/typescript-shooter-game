import { Game } from "../Game";
import { IStateManager } from "../interfaces/IStateManager";
import { IComponentManager } from "../interfaces/IComponentManager";

export abstract class StateBase {
    StateManager: IStateManager = Game.StateManager;
    ComponentManager: IComponentManager = Game.ComponentManager;
}