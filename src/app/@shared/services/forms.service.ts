import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { Company } from '../models/company.model';
import { Forms } from '../models/forms.model';
import { VerticalMarket } from '../models/vertical-market.model';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  env = environment.api

  constructor(private _requestService: RequestService) { }

  getCategories (): Observable<Category> {
    return this._requestService.get('/categories');
  }

  getForms (): Observable<Forms> {
    return this._requestService.get('/forms');
  }

  getVerticalMarket (): Observable<VerticalMarket> {
    return this._requestService.get('/vertical_market');
  }

  getCompany (): Observable<Company> {
    return this._requestService.get('/company')
  }
}
