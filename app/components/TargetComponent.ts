import { IComponent } from "../engine/interfaces/IComponent";
import { ComponentBase } from "../engine/models/ComponentBase";
import { ImageLoader } from "../engine/helpers/ImageLoader";
import { Box } from "../engine/models/Box";
import { InputManager } from "../engine/helpers/InputManager";
import { RendererManager } from "../engine/helpers/RendererManager";
import { GAME_LAYERS } from "../ShooterGame";

export class TargetComponent extends ComponentBase implements IComponent {

    name: string;
    position: Box = new Box(0, 0, 50, 47);

    onUpdate(): void {
        const mousePos = InputManager.MousePosition;
        this.position.X = mousePos.X;
        this.position.Y = mousePos.Y;
    }

    onRender(): void {
        const from = new Box(0, 0, 200, 188);
        var renderer = RendererManager.rendererFromLayer(GAME_LAYERS.TARGET);
        renderer.drawImageFromCenterPoint(ImageLoader.images.target, from, this.position);
    }

}