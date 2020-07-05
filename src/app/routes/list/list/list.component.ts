import { Component, OnInit , ViewEncapsulation, ViewChild} from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColorsService } from '../../../shared/colors/colors.service';

// import { DbOrganization } from '../../../model/organization'
const _clone = (d) => JSON.parse(JSON.stringify(d));

// import { OrganizationService } from '../../../service/organization.service'
// import {UserOrganization } from "../../../model/userorganization"
import * as _ from 'lodash';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
    editing = {};
    rows = [];
    rowsFilter = [];
    rowsExp = [];
    rowsSort = [];
    temp = [];
    expanded: any = {};
    timeout: any;

    rowsSel = [];
    selected = [];

    columns = [
        { prop: 'name' },
        { name: 'Company' },
        { name: 'Gender' }
    ];
    columnsSort = [
        { prop: 'name' },
        { name: 'Company' },
        { name: 'Gender' }
    ];
    @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;
    @ViewChild('myTable', { static: true }) tableExp: any;
    // orgs: UserOrganization[];
    // userOrg: UserOrganization[];
    // pageSize: number = 5;
    // totalPageNumber: number = 0;
    // filter: string = null;
    // public loading = false;
    // selectedIndex: number;
    // x:number[]=[]
    //  owner = {}

    constructor(
        public colors: ColorsService, 
        // private orgService: OrganizationService
        ) {     this.fetch((data) => {
            // cache our list
            this.temp = _clone(data);
    
            this.rows = _clone(data);;
            this.rowsFilter = _clone(data);;
            this.rowsExp = _clone(data);
            this.rowsSort = _clone(data);
            this.rowsSel = _clone(data);
        });
     }

    // convertTime(x) {
    //     var myDate = new Date(x);
    //     return myDate.toLocaleString();  
    // }

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

    // page = 1
    ngOnInit() {
        // this.getPagiOrg(this.page, null)            
    }

onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
        console.log('paged!', event);
    }, 100);
}
toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.tableExp.rowDetail.toggleExpandRow(row);
}

onDetailToggle(event) {
    console.log('Detail Toggled', event);
}

fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/company.json`);

    req.onload = () => {
        cb(JSON.parse(req.response));
    };

    req.send();
}

updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
}
    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function(d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    // Selection


    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);

        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    onActivate(event) {
        console.log('Activate Event', event);
    }
}
