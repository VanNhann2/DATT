import { Component, OnInit } from '@angular/core';

import { ColorsService } from '../../../shared/colors/colors.service';

// import { DbOrganization } from '../../../model/organization'

// import { OrganizationService } from '../../../service/organization.service'
// import {UserOrganization } from "../../../model/userorganization"
import * as _ from 'lodash';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    // orgs: UserOrganization[];
    // userOrg: UserOrganization[];
    pageSize: number = 5;
    totalPageNumber: number = 0;
    filter: string = null;
    public loading = false;
    selectedIndex: number;
    x:number[]=[]
     owner = {}

    constructor(
        public colors: ColorsService, 
        // private orgService: OrganizationService
        ) { }

    convertTime(x) {
        var myDate = new Date(x);
        return myDate.toLocaleString();  
    }

    // getPagiOrg(x: number, event) {
    //     if (event && event.page) {
    //         this.page = event.page;
    //     }
    //     this.loading = true;
        
    //     // localStorage.setItem('session',x.toString());
    //     // this.session = localStorage.getItem('session');
    //     //console.log(this.session) 
    //     this.orgService.paginationOrg(this.page, this.filter,this.pageSize).subscribe(
    //         (doc) => {
    //             this.loading = false;
    //             this.orgs = doc.infoOrgs;
    //             console.log(this.orgs)

    //             for(let i = 0; i< this.orgs.length; i++){
    //                 if(this.orgs[i].limitUsers == '0'){
    //                     this.orgs[i].limitUsers =  'N/A'
    //                 }
    //             }                
    //             for (let i = 0; i < this.orgs.length; i++) {
    //                 this.orgs[i].createdAt = this.convertTime( this.orgs[i].createdAt )
    //             }
    //             this.totalPageNumber = doc.pages * this.pageSize;
    //         }, err =>{
    //             this.loading = false;
    //         }
    //     )
    // }

    page = 1
    ngOnInit() {
        // this.getPagiOrg(this.page, null)            
    }
    
}
