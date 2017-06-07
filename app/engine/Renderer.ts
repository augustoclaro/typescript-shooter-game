import { Box } from "./models/Box";

export class Renderer {
    private static Canvas: HTMLCanvasElement;
    private static Context: CanvasRenderingContext2D;

    static setTarget(canvas: HTMLCanvasElement) {
        this.Canvas = canvas;
        this.Context = canvas.getContext('2d');
    }

    static drawImageFromCenterPoint(image: HTMLImageElement, sourceBox: Box, canvasBox: Box, deg: number = 0) {
        const rad = deg * Math.PI / 180;
        this.Context.translate(canvasBox.X, canvasBox.Y);
        this.Context.rotate(rad);
        this.Context.drawImage(image, sourceBox.X, sourceBox.Y, sourceBox.W, sourceBox.H, 
                                canvasBox.W / 2 * -1, canvasBox.H / 2 * -1, canvasBox.W, canvasBox.H);
        this.Context.rotate(rad * -1);
        this.Context.translate(canvasBox.X * -1, canvasBox.Y * -1);
    }

    static drawImage(image: HTMLImageElement, sourceBox: Box, canvasBox: Box, deg: number = 0) {
        const rad = deg * Math.PI / 180;
        this.Context.translate(canvasBox.X, canvasBox.Y);
        this.Context.rotate(rad);
        this.Context.drawImage(image, sourceBox.X, sourceBox.Y, sourceBox.W, sourceBox.H, 
                                canvasBox.X, canvasBox.Y, canvasBox.W, canvasBox.H);
        this.Context.rotate(rad * -1);
        this.Context.translate(canvasBox.X * -1, canvasBox.Y * -1);
    }

    static clear() {
        this.Context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
    }

}