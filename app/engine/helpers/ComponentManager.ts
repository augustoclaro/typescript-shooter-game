import { IComponentManager } from "../interfaces/IComponentManager";
import { IComponent } from "../interfaces/IComponent";

export class ComponentManager implements IComponentManager {
    
    private activeComponents: IComponent[] = [];
    private componentsByName: { [name: string]: IComponent } = {};

    registerComponent(name: string, component: IComponent): void {
        if (this.componentsByName[name])
            throw new Error(`Component '${name}' already exists.`);
        component.name = name;
        this.activeComponents.push(component);
        this.componentsByName[name] = component;
    }

    unregisterComponent(name: string): void {
        const comp = this.componentsByName[name];
        if (!comp)
            throw new Error(`Component '${name}' doesn't exists.`);
        const index = this.activeComponents.indexOf(comp);
        this.activeComponents.splice(index, 1);
    }

    getActiveComponents(): IComponent[] {
        return this.activeComponents;
    }

}