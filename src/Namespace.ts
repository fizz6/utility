declare const global: any;
declare const window: any;

const store = global === undefined
    ? window as any
    : global as any;

const symbol = Symbol();

export interface Constructor {
    new (...args: any[]): Object;
    [symbol]?: string[];
}
    
class Namespace {
    
    public static readonly Index: symbol = symbol;
    
    public static resolve(constructor: Constructor): string {
        if (!constructor.hasOwnProperty(symbol) || !(constructor[symbol] instanceof Array)) {
            return constructor.name;
        }
        
        return [...(constructor[symbol] as string[]), constructor.name].join('.');
    }
    
}

if (store.fizz6 === undefined) {
    store.fizz6 = Namespace;
}

export default store.fizz6;