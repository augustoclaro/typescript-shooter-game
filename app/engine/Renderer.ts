import { Box } from "./models/Box";
import { Canvas } from "./models/Canvas";

export class Renderer {

    constructor(public Canvas: Canvas) {
    }

    drawImageFromCenterPoint(image: HTMLImageElement, sourceBox: Box, canvasBox: Box, deg: number = 0) {
        const rad = deg * Math.PI / 180;
        this.Canvas.Context.translate(canvasBox.X, canvasBox.Y);
        this.Canvas.Context.rotate(rad);
        this.Canvas.Context.drawImage(image, sourceBox.X, sourceBox.Y, sourceBox.W, sourceBox.H, 
                                canvasBox.W / 2 * -1, canvasBox.H / 2 * -1, canvasBox.W, canvasBox.H);
        this.Canvas.Context.rotate(rad * -1);
        this.Canvas.Context.translate(canvasBox.X * -1, canvasBox.Y * -1);
    }

    drawImage(image: HTMLImageElement, sourceBox: Box, canvasBox: Box, deg: number = 0) {
        const rad = deg * Math.PI / 180;
        this.Canvas.Context.translate(canvasBox.X, canvasBox.Y);
        this.Canvas.Context.rotate(rad);
        this.Canvas.Context.drawImage(image, sourceBox.X, sourceBox.Y, sourceBox.W, sourceBox.H, 
                                canvasBox.X, canvasBox.Y, canvasBox.W, canvasBox.H);
        this.Canvas.Context.rotate(rad * -1);
        this.Canvas.Context.translate(canvasBox.X * -1, canvasBox.Y * -1);
    }

    clear() {
        this.Canvas.Context.clearRect(0, 0, this.Canvas.Width, this.Canvas.Height);
    }

}