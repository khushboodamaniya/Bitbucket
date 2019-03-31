
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
public getForObject<T>(url: string, options: RestRequestOptions ): Observable<T> {
    return this.http.get<T>(url, options).catch((error: HttpErrorResponse) => Observable.throw(error));
}

public get<T>(url: string): Observable<T> {
  return this.http.get<T>(url);
}

public deleteForObject<T>(url,  options: RestRequestOptions ): Observable<T> {
  return this.http.delete<T>(url, options);
}

public delete<T>(url: string): Observable<T> {
  return this.http.delete<T>(url);
}
}

export interface RestRequestOptions {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  params?: HttpParams | {
      [param: string]: string | string[];
  };
  body: any;
  observe?: any;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  responseStaticType?: any;
}
