import { IComponent } from "../engine/interfaces/IComponent";
import { ComponentBase } from "../engine/models/ComponentBase";
import { Renderer } from "../engine/Renderer";
import { ImageLoader } from "../engine/helpers/ImageLoader";
import { Box } from "../engine/models/Box";
import { InputManager } from "../engine/helpers/InputManager";

export class TargetComponent extends ComponentBase implements IComponent {

    name: string = "TargetComponent";
    position: Box = new Box(0, 0, 50, 47);

    onUpdate(): void {
        const mousePos = InputManager.MousePosition;
        this.position.X = mousePos.X;
        this.position.Y = mousePos.Y;
    }

    onRender(): void {
        const from = new Box(0, 0, 200, 188);
        Renderer.drawImageFromCenterPoint(ImageLoader.images.target, from, this.position);
    }

}