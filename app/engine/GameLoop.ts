// import * as MainLoop from './helpers/MainLoop.js';
import { Game } from "./Game";
//http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
//https://github.com/IceCreamYou/MainLoop.js

export class GameLoop {

    public static Delta: number;

    private static LoopFunc: () => void;
    private static lastExecutedAt: number = 0;

    static start(loopFn: () => void) {
        if (typeof loopFn !== 'function')
            throw new Error('Invalid loop function.');
        this.LoopFunc = loopFn;
        this.execute();
    }

    private static execute(timestamp: number = 0) {
        window.requestAnimationFrame(this.execute.bind(this));  

        if (timestamp && timestamp < this.lastExecutedAt + (1000 / Game.GameOptions.fps))
            return;

        this.Delta = timestamp - this.lastExecutedAt;
        this.lastExecutedAt = timestamp;
        this.LoopFunc();
    }
}