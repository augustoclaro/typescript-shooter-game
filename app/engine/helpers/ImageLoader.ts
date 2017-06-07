export class ImageLoader {

    static images: { [key: string]: HTMLImageElement } = {};

    static load(images: { [key: string]: string }): Promise<void> {
        return Promise.all(Object.keys(images).map(key => {
            const url = images[key];
            const img = new Image();
            img.src = url;
            return new Promise<void>((resolve, reject) => {
                img.onload = () => {
                    this.images[key] = img;
                    resolve();
                };
                img.onerror = () => {
                    reject(new Error('Could not load image at ' + url));
                }
            });
        })).catch(err => console.log(err));
    }
}