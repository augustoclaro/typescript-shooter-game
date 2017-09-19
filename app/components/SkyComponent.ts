import { IComponent } from "../engine/interfaces/IComponent";
import { ComponentBase } from "../engine/models/ComponentBase";
import { ImageLoader } from "../engine/helpers/ImageLoader";
import { Box } from "../engine/models/Box";
import { Game } from "../engine/Game";
import { RendererManager } from "../engine/helpers/RendererManager";
import { GAME_LAYERS } from "../ShooterGame";

export class SkyComponent extends ComponentBase implements IComponent {

    name: string;

    onRender(): void {
        const from = new Box(0, 0, ImageLoader.images.sky.width, ImageLoader.images.sky.height);
        const to = new Box(0, 0, Game.GameCanvas.Width, Game.GameCanvas.Height);
        var renderer = RendererManager.rendererFromLayer(GAME_LAYERS.SKY);
        renderer.drawImage(ImageLoader.images.sky, from, to);
    }

}