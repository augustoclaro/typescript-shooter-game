import { IComponent } from "../engine/interfaces/IComponent";
import { ComponentBase } from "../engine/models/ComponentBase";
import { Renderer } from "../engine/Renderer";
import { ImageLoader } from "../engine/helpers/ImageLoader";
import { Box } from "../engine/models/Box";
import { Game } from "../engine/Game";

export class BalloonComponent extends ComponentBase implements IComponent {

    name: string = "BalloonComponent";
    position: Box = new Box(0, 0, 56, 76);
    balloonSpeed: number = 2;

    constructor(x: number) {
        super();
        this.position.X = x;
        this.position.Y = Game.GameCanvas.height;
    }

    onUpdate(): void {
        this.position.Y -= this.balloonSpeed;
    }

    onRender(): void {
        const from = new Box(0, 0, ImageLoader.images.balloon.width, ImageLoader.images.balloon.height);
        Renderer.drawImageFromCenterPoint(ImageLoader.images.balloon, from, this.position);
    }

}