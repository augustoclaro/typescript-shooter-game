import { Game } from "../Game";
import { Vector } from "../models/Vector";

export class InputManager {

    static MousePosition: Vector = new Vector();

    static startListeningToEvents() {
        Game.GameCanvas.Element.addEventListener('mousemove', ev => {
            this.MousePosition.X = ev.offsetX;
            this.MousePosition.Y = ev.offsetY;
        });
    }

    static clear() {

    }
}