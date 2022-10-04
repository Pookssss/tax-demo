import { Component, OnInit, Input } from '@angular/core';

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

  monthNow = "";
  yearNow = new Date().getFullYear();
  monthDisable = (d: Date): boolean => {
    const date = d.getDate();
    // Prevent Saturday and Sunday from being selected.
    return date === 0 || date === 6;
  }




  ordinaryFiling = true;
  additionalFiling = false;



  constructor() { }

  ngOnInit(): void {
    this.plusYear();
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
    console.log(event);
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
    console.log(month);
  }

  onMonthChange(event: any) {
    this.month = event.target.value;
    console.log(this.month);
  }

  onchangeYear(event: any) {
    this.year = event.target.value
    console.log(this.year);
  }

}
