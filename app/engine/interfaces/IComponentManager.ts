import { IComponent } from "./IComponent";

export interface IComponentManager {

    registerComponent(name: string, component: IComponent): void;

    unregisterComponent(name: string): void;

    getActiveComponents(): IComponent[];

}