import { Game } from "./engine/Game";
import { MainState } from "./states/MainState";

export const GAME_LAYERS = {
    SKY: 0,
    BALLOONS: 1,
    TARGET: 2
};

export class ShooterGame {

    boot() {
        Game.start({
            width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            fps: 50,
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