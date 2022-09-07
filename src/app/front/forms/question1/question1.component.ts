import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/@shared/services/forms.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styles: [
  ]
})
export class Question1Component implements OnInit {
  isVerticalDisabled = true;
  isCompanyDisabled = true;

  questionForm1!: FormGroup;

  constructor(
    public _formBuilder: FormBuilder,
    public _service: FormsService
  ) { }

  ngOnInit(): void {
    this.myForm();
  }

  isChecked(name: string, event: Event | any){
    if (name == 'vertical') this.isVerticalDisabled = !event.checked;
    if (name == 'company') this.isCompanyDisabled = !event.checked;
  }

  myForm() {
    this.questionForm1 = this._formBuilder.group({
      id: [],
      question: [],
      answer_type: [],
      required: [],
      global: [],
      vertical_market: [],
      company: []
    })

  }
}
