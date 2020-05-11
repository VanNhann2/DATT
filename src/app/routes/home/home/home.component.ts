import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    isAccOpen1 = false;
    isAccOpen2 = false;
    isAccOpen3 = false;
    isAccOpen4 = false;
    isAccOpen5 = false;
    isAccOpen6 = false;

    constructor() { }

    ngOnInit() {
    //   ngDialog.open({
    //     template: 'openForm',
    //     className: 'ngdialog-theme-plain',
    //     scope: $scope
    // });
  
    }
  // ngDialog.open({
  //       template: 'openForm',
  //       className: 'ngdialog-theme-default',
  //   });
}
