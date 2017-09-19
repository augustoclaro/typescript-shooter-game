import { StateManager } from "./helpers/StateManager";
import { ComponentManager } from "./helpers/ComponentManager";
import { IState } from "./interfaces/IState";
import { GameLoop } from "./GameLoop";
import { ImageLoader } from "./helpers/ImageLoader";
import { InputManager } from "./helpers/InputManager";
import { Canvas } from "./models/Canvas";
import { RendererManager } from "./helpers/RendererManager";

export type GameOptions = {
    width: number,
    height: number,
    fps: number,
    states: IState[],
    initialState?: string,
    images?: { [key: string]: string }
};

export class Game {
    static StateManager: StateManager = new StateManager();
    static ComponentManager: ComponentManager = new ComponentManager();

    static GameCanvas: Canvas;
    static GameOptions: GameOptions;

    static start(options: GameOptions) {
        this.GameOptions = options;

        // Create game canvas
        this.GameCanvas = new Canvas(`game-canvas-${Date.now()}`, options.width, options.height);
        document.body.appendChild(this.GameCanvas.Element);

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

        RendererManager.clear();        
        this.ComponentManager.getActiveComponents()
            .forEach(c => c.onRender && c.onRender());
        RendererManager.renderToGameCanvas();
    }

}