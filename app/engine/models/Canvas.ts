export class Canvas {

    public Element: HTMLCanvasElement;
    public Context: CanvasRenderingContext2D;
    
    constructor(public Id: string, public Width: number, public Height: number) {
        this.Element = document.createElement('canvas');
        this.Element.width = this.Width;
        this.Element.height = this.Height;
        this.Element.id = this.Id;
        this.Context = this.Element.getContext('2d');
    }

    clear() {
        this.Context.clearRect(0, 0, this.Width, this.Height);
    }

    transferTo(canvas: Canvas) {
        canvas.Context.drawImage(this.Element, 0, 0, this.Width, this.Height,
                                    0, 0, canvas.Width, canvas.Height);
    }
}