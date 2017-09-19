import { Canvas } from "../models/Canvas";
import { Game } from "../Game";
import { Renderer } from "../Renderer";

export class RendererManager {

    private static Layers: Canvas[] = [];
    
    static rendererFromLayer(layer: number): Renderer {
        const canvas = this.Layers[layer] = this.Layers[layer]
            || new Canvas(`canvas-layer-${layer}`, Game.GameOptions.width, Game.GameOptions.height);
        return new Renderer(canvas);
    }

    static clear() {
        this.Layers = [];
    }

    static renderToGameCanvas() {
        Game.GameCanvas.clear();
        console.log(this.Layers.length);
        this.Layers.filter(l => l).forEach(c => c.transferTo(Game.GameCanvas));
    }

}