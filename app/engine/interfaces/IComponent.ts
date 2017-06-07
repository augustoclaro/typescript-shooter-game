export interface IComponent {
    name: string;

    onInit?(): void;

    onDetroy?(): void;

    onUpdate?(): void;

    onRender?(): void;
}