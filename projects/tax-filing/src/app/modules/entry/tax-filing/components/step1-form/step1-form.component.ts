import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

interface Months {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-step1-form',
  templateUrl: './step1-form.component.html',
  styleUrls: ['./step1-form.component.scss']
})
export class Step1FormComponent implements OnInit {

  filingType = 0;

  months: Months[] = [
    { value: "01", viewValue: 'January' },
    { value: "02", viewValue: 'February' },
    { value: "03", viewValue: 'March' },
    { value: "04", viewValue: 'April' },
    { value: "05", viewValue: 'May' },
    { value: "06", viewValue: 'June' },
    { value: "07", viewValue: 'July' },
    { value: "08", viewValue: 'August' },
    { value: "09", viewValue: 'September' },
    { value: "10", viewValue: 'Octorber' },
    { value: "11", viewValue: 'November' },
    { value: "12", viewValue: 'December' },
  ]

  years: number[] = [];

  // Componen ใช้งาน
  month: Months | any;
  year: number | any;
  saleAmount: number | any = null;
  taxAmount: number | any = null;
  surchargeAmount: number | any = null;

  monthNow: string | any;
  yearNow = new Date().getFullYear();




  ordinaryFiling = true;
  additionalFiling = false;



  constructor(
    private localtion: Location,
    private router: Router
  ) {
    let month = new Date().getMonth() + 1;
    this.monthNow = month.toString();
  }

  ngOnInit(): void {
    this.plusYear();
    console.log("month noew : ", this.monthNow);

  }

  ngOnchange(): void {

  }


  plusYear() {
    let limityear = 2020;
    let year = new Date().getFullYear();
    let diff = year - limityear;
    diff += 1; // 2020
    for (let i = 0; i < diff; i++) {
      this.years.push(2020 + i);
    }
  }


  onFilingTypeChange(event: any) {
    this.filingType = event.target.value;
    if (this.filingType === 0) {
      this.ordinaryFiling = true;
      this.additionalFiling = false;
    } else {
      this.ordinaryFiling = false;
      this.additionalFiling = true;
    }
  }


  selectMonth(month: any) {

  }

  onMonthChange(event: any) {
    this.month = event.target.value;

  }

  onchangeYear(event: any) {
    this.year = event.target.value

  }

  onChangeSaleAmount() {
    this.taxAmount = this.saleAmount * 0.07;
    // console.log(this.taxAmount);

  }


  backPage() {
    this.localtion.back();
  }

  validateForm(data: number) {
    if (data == 2) {
      this.nextStep();
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  }

  nextStep() {
    console.log("next step");
    this.router.navigate(['main/entry/tax-filing/confirm']);
  }

}
