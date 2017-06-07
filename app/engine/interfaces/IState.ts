export interface IState {

    name: string;

    onInit?(): void;

    onDetroy?(): void;

    onUpdate?(): void;

}