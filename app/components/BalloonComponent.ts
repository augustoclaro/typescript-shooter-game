import { IComponent } from "../engine/interfaces/IComponent";
import { ComponentBase } from "../engine/models/ComponentBase";
import { ImageLoader } from "../engine/helpers/ImageLoader";
import { Box } from "../engine/models/Box";
import { Game } from "../engine/Game";
import { RendererManager } from "../engine/helpers/RendererManager";
import { GAME_LAYERS } from "../ShooterGame";
import { GameLoop } from "../engine/GameLoop";

export class BalloonComponent extends ComponentBase implements IComponent {

    name: string;
    position: Box = new Box(0, 0, 56, 76);
    balloonSpeed: number = 0.08;

    constructor(x: number) {
        super();
        this.position.X = x;
        this.position.Y = Game.GameCanvas.Height;
    }

    onUpdate(): void {
        this.position.Y -= this.balloonSpeed * GameLoop.Delta;
        console.log(-ImageLoader.images.balloon.height + 70);
        if (this.position.Y <= (-ImageLoader.images.balloon.height + 70)) {
            this.ComponentManager.unregisterComponent(this.name);
        }
    }

    onRender(): void {
        const from = new Box(0, 0, ImageLoader.images.balloon.width, ImageLoader.images.balloon.height);
        var renderer = RendererManager.rendererFromLayer(GAME_LAYERS.BALLOONS);
        renderer.drawImage(ImageLoader.images.balloon, from, this.position);
    }

}