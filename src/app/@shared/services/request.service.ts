import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private _apiEndpoint = environment.api;

  constructor(
    private _httpClient: HttpClient
  ) { }

  get(url = '', _params = []): Observable<any> {
    const params = this.setParams(_params);
    return this._httpClient.get(this._apiEndpoint + url, { params });
  }

  post(url = '', data: any, params = []): Observable<any> {
    return this._httpClient.post(this._apiEndpoint + url, data);
  }

  postImage(url = '', data: any, file: any, params = []): Observable<any> {
    return this._httpClient.post(this._apiEndpoint + url, data, file);
  }

  put(url = '', data: any, params = []): Observable<any> {
    return this._httpClient.put(this._apiEndpoint + url, data);
  }

  delete(url = '', params = []): Observable<any> {
    return this._httpClient.delete(this._apiEndpoint + url);
  }

  private setParams(data: any): HttpParams {
    let params = new HttpParams()
    for (let p in data) {
      params = params.append(p,data[p]);
    }
    return params;
  }
}
