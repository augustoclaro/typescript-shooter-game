import { StateBase } from "../engine/models/StateBase";
import { IState } from "../engine/interfaces/IState";
import { TargetComponent } from "../components/TargetComponent";
import { SkyComponent } from "../components/SkyComponent";
import { BalloonComponent } from "../components/BalloonComponent";

export class MainState extends StateBase implements IState {

    name: string = "MainState";
    lastBalloonCreatedAt: number;
    
    onInit(): void {
        this.ComponentManager.registerComponent('SkyComponent', new SkyComponent());
        this.ComponentManager.registerComponent('TargetComponent', new TargetComponent());
    }

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private createBalloon() {
        const now = performance.now();
        if (!this.lastBalloonCreatedAt || (now - this.lastBalloonCreatedAt) >= 2000) {
            this.lastBalloonCreatedAt = now;
            const balloonX = this.getRandomInt(0, 800);
            this.ComponentManager.registerComponent('BalloonComponent' + now, new BalloonComponent(balloonX));
        }
    }

    onUpdate(): void {
        this.createBalloon();
    }
    
    onDestroy(): void {
        console.log('main state init');
    }

}