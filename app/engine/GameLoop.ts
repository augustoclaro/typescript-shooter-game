export class GameLoop {
    private static LoopFunc: () => void;

    static start(loopFn: () => void) {
        if (typeof loopFn !== 'function')
            throw new Error('Invalid loop function.');
        this.LoopFunc = loopFn;
        this.execute();
    }

    private static execute() {
        window.requestAnimationFrame(this.execute.bind(this));
        this.LoopFunc();
    }
}