export class EventEmitter {
    private static events: { [event: string]: Function[] } = {};

    static on(event: string, ...actions: Function[]) {
        const fnArr: Function[] = this.events[event] || [];
        Array.prototype.push.apply(fnArr, actions);
        this.events[event] = fnArr;
    }

    static trigger(event: string, param: any) {
        const eventActions = this.events[event];
        if (!eventActions || !eventActions.length) return;
        eventActions.forEach(fn => fn(param));
    }
}