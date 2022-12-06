console.log("4.1.4　外部命名空间")

declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }
    export interface Event {
        x: number;
        y: number;
    }
    export interface Base extends Selectors {
        event: Event;
    }
}
declare var d3: D3.Base;
