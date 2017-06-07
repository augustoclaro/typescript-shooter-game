import { Game } from "./engine/Game";
import { MainState } from "./states/MainState";

export class ShooterGame {

    constructor(private width: number, private height: number) {
    }

    createCanvas(id: string): HTMLCanvasElement {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.id = id;
        return canvas;
    }

    boot() {
        const gameCanvas = this.createCanvas('gameCanvas');
        document.body.appendChild(gameCanvas);

        Game.start(gameCanvas, {
            width: this.width,
            height: this.height,
            states: [
                new MainState()
            ],
            images: {
                "target": "./app/images/target.png",
                "sky": "./app/images/sky.png",
                "balloon": "./app/images/balloon.png",
            }
        });
    }
}