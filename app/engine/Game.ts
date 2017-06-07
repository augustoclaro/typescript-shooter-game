import { StateManager } from "./helpers/StateManager";
import { ComponentManager } from "./helpers/ComponentManager";
import { IState } from "./interfaces/IState";
import { GameLoop } from "./GameLoop";
import { Renderer } from "./Renderer";
import { ImageLoader } from "./helpers/ImageLoader";
import { InputManager } from "./helpers/InputManager";

export type GameOptions = {
    width: number,
    height: number,
    states: IState[],
    initialState?: string,
    images?: { [key: string]: string }
};

export class Game {
    static StateManager: StateManager = new StateManager();
    static ComponentManager: ComponentManager = new ComponentManager();

    static GameCanvas: HTMLCanvasElement;
    static GameOptions: GameOptions;

    static start(canvas: HTMLCanvasElement, options: GameOptions) {
        this.GameCanvas = canvas;
        this.GameOptions = options;

        // Set the canvas to the renderer
        Renderer.setTarget(canvas);

        // Register states
        (options.states || []).forEach(s => this.StateManager.registerState(s));

        // Set initial state
        if (options.initialState) {
            this.StateManager.setState(options.initialState);
        } else {
            const firstState = options.states[0];
            if (!firstState) {
                throw new Error('Please provide at least one state.');
            }
            this.StateManager.setState(firstState.name);
        }

        // Load images before start loop
        let imagesPromise;
        if (options.images) {
            imagesPromise = ImageLoader.load(options.images);
        } else {
            imagesPromise = Promise.resolve();
        }

        // Start handling input
        InputManager.startListeningToEvents();

        // Start the game loop
        imagesPromise.then(() => {
            // this.gameLoop.length;
            // GameLoop.length;
            GameLoop.start(this.gameLoop.bind(this));
        });
    }

    private static gameLoop() {

        const currentState = this.StateManager.getCurrentState();
        currentState.onUpdate && currentState.onUpdate();

        this.ComponentManager.getActiveComponents()
            .forEach(c => c.onUpdate && c.onUpdate());

        Renderer.setTarget(this.GameCanvas);
        Renderer.clear();

        this.ComponentManager.getActiveComponents()
            .forEach(c => c.onRender && c.onRender());
    }

}