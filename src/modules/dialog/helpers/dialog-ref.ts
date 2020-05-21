import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

export class DialogRef {

    private readonly _afterClosed = new Subject<any>();

    public get afterClosed(): Observable<any> {
        return this._afterClosed.asObservable();
    }

    constructor() { }

    public close(result?: any) {
        this._afterClosed.next(result);
    }

}
