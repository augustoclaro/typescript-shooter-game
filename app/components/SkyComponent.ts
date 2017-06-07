import { IComponent } from "../engine/interfaces/IComponent";
import { ComponentBase } from "../engine/models/ComponentBase";
import { Renderer } from "../engine/Renderer";
import { ImageLoader } from "../engine/helpers/ImageLoader";
import { Box } from "../engine/models/Box";
import { Game } from "../engine/Game";

export class SkyComponent extends ComponentBase implements IComponent {

    name: string = "SkyComponent";

    onRender(): void {
        const from = new Box(0, 0, ImageLoader.images.sky.width, ImageLoader.images.sky.height);
        const to = new Box(0, 0, Game.GameCanvas.width, Game.GameCanvas.height);
        Renderer.drawImage(ImageLoader.images.sky, from, to);
    }

}