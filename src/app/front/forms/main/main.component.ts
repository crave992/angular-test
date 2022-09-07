import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/@shared/models/category.model';
import { Company } from 'src/app/@shared/models/company.model';
import { Forms, FormsDefaults } from 'src/app/@shared/models/forms.model';
import { VerticalMarket } from 'src/app/@shared/models/vertical-market.model';
import { FormsService } from 'src/app/@shared/services/forms.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  isVerticalDisabled = true;
  isCompanyDisabled = true;
  newForm!: FormGroup;
  categoryList!: Category[];
  verticalMarketList!: VerticalMarket[];
  companyList!: Company[];

  constructor(
    public _formBuilder: FormBuilder,
    public _service: FormsService
  ) { }

  ngOnInit(): void {
    this.myForm();
    this._service.getForms().subscribe(
      (res: any) => {

        const form = res[0];
        this.newForm.patchValue({
          ...form,
          category: form.category.id,
          vertical_market: form.vertical_market.id,
          company: form.company.id
        });

      }
    )

    this._service.getCategories().subscribe(
      (cat: Category | any) => {
        this.categoryList = cat;
      }
    )

    this._service.getVerticalMarket().subscribe(
      (vm: VerticalMarket | any) => {
        this.verticalMarketList = vm;
      }
    )

    this._service.getCompany().subscribe(
      (com: Company | any) => {
        this.companyList = com;
      }
    )
  }

  isChecked(name: string, event: Event | any){
    if (name == 'vertical') this.isVerticalDisabled = !event.checked;
    if (name == 'company') this.isCompanyDisabled = !event.checked;
  }

  myForm() {
    this.newForm = this._formBuilder.group({
      id: [FormsDefaults.id],
      category: [FormsDefaults.category],
      title: [FormsDefaults.title],
      global: [FormsDefaults.global],
      vertical_market: [FormsDefaults.vertical_market],
      company: [FormsDefaults.company],
    })
  }
}
