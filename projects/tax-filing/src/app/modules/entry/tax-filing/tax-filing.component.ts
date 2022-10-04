import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tax-filing',
  templateUrl: './tax-filing.component.html',
  styleUrls: ['./tax-filing.component.scss']
})
export class TaxFilingComponent implements OnInit {

  stepProgress = [
    {
      no: 1,
      class: "",
      title: "Input Detail",
    },
    {
      no: 2,
      class: "",
      title: "Review & Confirm",
    },
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    console.log("tax-filing", this.router.url);
    this.splitUrl()

  }

  splitUrl() {
    let url = this.router.url;
    let splitUrl = url.split('/');
    let step = splitUrl[splitUrl.length - 1];
    if (step == 'confirm') {
      this.stepProgress[0].class = "done";
      this.stepProgress[1].class = "active";
    } else if (step == 'form') {
      this.stepProgress[1].class = "active";
    } else {
      console.log("error step")
    }

    return splitUrl;
  }

}
