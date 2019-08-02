export interface Constructor {
    new (...args: any[]): Object;
    namespace?: string[];
}

const store = global === undefined
    ? window as any
    : global as any;

class Namespace {
    
    public globals: Map<string, any> = new Map();
    
    public static Resolve(constructor: Constructor): string {
        if (constructor.namespace === undefined) {
            return constructor.name;
        }
        
        return [...constructor.namespace, constructor.name].join('.');
    }
    
}
    
if (store.fizz6 === undefined) {
    store.fizz6 = Namespace;
}

export default store.fizz6;