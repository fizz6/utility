import Namespace from './Namespace';

export interface Constructor<T> {
    new (...args: any[]): T;
}

export default class Singleton {
    
    private static m_globals: Map<string, any> = new Map();
    
    public static of<T>(constructor: T): T {
        const identifier = Namespace.resolve(constructor);
        if (!Singleton.m_globals.has(identifier)) {
            Singleton.m_globals.set(identifier, constructor);
        }
        
        return Singleton.m_globals.get(identifier) as T;
    }
    
}