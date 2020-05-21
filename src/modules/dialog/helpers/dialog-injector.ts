import { InjectFlags, InjectionToken, Injector, Type } from '@angular/core';

export class DialogInjector implements Injector {
    constructor(private _parentInjector: Injector, private _additionalTokens: WeakMap<any, any>) { }

    public get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
    public get(token: any, notFoundValue?: any);
    public get(token: any, notFoundValue?: any, flags?: any) {
        const value = this._additionalTokens.get(token);

        if (value) { return value; }

        return this._parentInjector.get<any>(token, notFoundValue);
    }
}
