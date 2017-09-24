import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

export interface IPreziCreator {
    name: string;
    profileUrl?: string;
}
export interface IPreziCard {
    createdAt: Date;
    creator: IPreziCreator;
    modifiedAt: Date;
    thumbnail: string;
    title: string;
    _id: string;
}

export interface IPrezlyResult {
    limit: number;
    offset: number;
    page: number;
    pages: number;
    total: number;
    docs: IPreziCard[];
}
export type PrezlySortValues = 'createdAt' | '-createdAt' | 'title' | '-title' | 'modifiedAt' | '-modifiedAt' | null;
export interface IPreziQuery {
    page?: number;
    title?: string;
    sort?: PrezlySortValues;
}

export interface IPrezlyQueryService {
  getPrezlies: (IPreziQuery) => Observable<IPrezlyResult>;
}

@Injectable()
export class PrezliQueryService implements IPrezlyQueryService {
    private baseUrl: string = 'https://prezi-homeassignment-backend.herokuapp.com/api/v1/presentation/';
    private queryChanged = new Subject<number>();
    public queryChanged$ = this.queryChanged.asObservable();
    constructor(private http: Http) { }

    public getPrezlies (queryParams: IPreziQuery): Observable<IPrezlyResult> {
        console.log('getPrezlies');
        return this.http.get(this.baseUrl, {search: queryParams}).map((res: Response) => {
            console.log(res.json());
            return res.json() as IPrezlyResult;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
