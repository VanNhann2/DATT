import { Component, OnInit } from '@angular/core';
// import { DbLead } from '../../../../model/summary_model/lead';
// import { DbContact } from '../../../../model/summary_model/contact';
// import { DbTicket } from '../../../../model/summary_model/ticket';
// import { DbSMS } from '../../../../model/summary_model/sms';
// import { DbUser } from '../../../../model/summary_model/user';
// import { DbOmni } from '../../../../model/summary_model/omni';
// import { DbOrg } from '../../../../model/summary_model/org';
// import { DbEmail } from '../../../../model/summary_model/email';
// import { SummaryService } from '../../../../service/summary.service';
// import { modelDetailSummary } from '../../../../model/summary_model/detailsummary'
// import { SummaryDetailService } from '../../../../service/summaryDetail.service';
// import { modelDetailSummaryOrg } from '../../../../model/summary_model/detaisummaryorg'
// import { modelDetailSummarySMS } from '../../../../model/summary_model/detailsummarysms'
// // import { modelDetailSummaryOmni } from '../../../../model/summary_model/detailsummaryomni'
// import { modelDetailSummaryOmni } from '../../../../model/summary_model/detailsummaryomni'

@Component({
    selector: 'app-total',
    templateUrl: './total.component.html',
    styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
    //ngx-loading 
    public loading = false;

    //total
    // gettotalLead: DbLead[];
    // gettotalContact: DbContact[];
    // gettotalTicket: DbTicket[];
    // gettotalSMS: DbSMS[];
    // gettotalUser: DbUser[];
    // gettotalOmni: DbOmni[];
    // gettotalOrg: DbOrg[];
    // gettotalEmail: DbEmail[];
    // getdetailsummarysms: modelDetailSummarySMS[];
    // getdetailsummaryomni : modelDetailSummaryOmni[];
    // arrayisDones = []
    // //detail Summary
    // getdetailsummary: modelDetailSummary[];
    // getdetailsummaryorg: modelDetailSummaryOrg[];
    // isDones: String
    // daypick = new Date();
    // daynow = new Date();
    // dayinput: string = this.daynow.getFullYear() + "-" + (this.daynow.getMonth() + 1) + "-" + this.daynow.getDate();

    // //category
    // name: String

    //không khai báo hàm trong constructor vì còn thiếu nên được viết trong ngOnInit()
    constructor(
        // private getdbService: SummaryService, private detailsummary: SummaryDetailService
        ) {}
    //khởi tạo hàm
    // getLeadFromService(): void {
    //     this.getdbService.getDbLead(this.dayinput).subscribe(    // dùng sub để theo dõi quá trình lấy dl, sao đó gán gettotalsLead bằng updateDBgetLead và dùng gettotalsLead để hiển thị lên màn hình
    //         (updateDBgetLead) => {
    //             this.gettotalLead = updateDBgetLead;
    //         }
    //     )
    // }

    // getContactFromService(): void {
    //     this.getdbService.getDbContact(this.dayinput).subscribe(    // dùng sub để theo dõi quá trình lấy dl, sao đó gán gettotalsLead bằng updateDBgetLead và dùng gettotalsLead để hiển thị lên màn hình
    //         (updateDBgetLead) => {
    //             this.gettotalContact = updateDBgetLead;
    //         }
    //     )
    // }
    // getSMSFromService(): void {
    //     this.getdbService.getDbSMS(this.dayinput).subscribe(    // dùng sub để theo dõi quá trình lấy dl, sao đó gán gettotalsLead bằng updateDBgetLead và dùng gettotalsLead để hiển thị lên màn hình
    //         (updateDBgetLead) => {
    //             this.gettotalSMS = updateDBgetLead;
    //         }
    //     )
    // }
    // getOrgFromService(): void {
    //     this.getdbService.getDbOrg(this.dayinput).subscribe(    // dùng sub để theo dõi quá trình lấy dl, sao đó gán gettotalsLead bằng updateDBgetLead và dùng gettotalsLead để hiển thị lên màn hình
    //         (updateDBgetLead) => {
    //             this.gettotalOrg = updateDBgetLead;
    //         }
    //     )
    // }
    // getEmailFromService(): void {
    //     this.getdbService.getDbEmail(this.dayinput).subscribe(    // dùng sub để theo dõi quá trình lấy dl, sao đó gán gettotalsLead bằng updateDBgetLead và dùng gettotalsLead để hiển thị lên màn hình
    //         (updateDBgetLead) => {
    //             this.gettotalEmail = updateDBgetLead;
    //         }
    //     )
    // }
    // getTicketFromService(): void {
    //     this.getdbService.getDbTicket(this.dayinput).subscribe(    // dùng sub để theo dõi quá trình lấy dl, sao đó gán gettotalsLead bằng updateDBgetLead và dùng gettotalsLead để hiển thị lên màn hình
    //         (updateDBgetLead) => {
    //             this.gettotalTicket = updateDBgetLead;
    //         }
    //     )
    // }
    // getUserFromService(): void {
    //     this.getdbService.getDbUser(this.dayinput).subscribe(    // dùng sub để theo dõi quá trình lấy dl, sao đó gán gettotalsLead bằng updateDBgetLead và dùng gettotalsLead để hiển thị lên màn hình
    //         (updateDBgetLead) => {
    //             this.gettotalUser = updateDBgetLead;
    //         }
    //     )
    // }
    // getOmniFromService(): void {
    //     console.log(this.dayinput)
    //     this.getdbService.getDbOmni(this.dayinput).subscribe(    // dùng sub để theo dõi quá trình lấy dl, sao đó gán gettotalsLead bằng updateDBgetLead và dùng gettotalsLead để hiển thị lên màn hình
    //         (updateDBgetLead) => {
    //             this.gettotalOmni = updateDBgetLead;
    //         }
    //     )
    // }
    // DetailSummaryOrg() {
    //     this.loading = true;
    //     this.getdetailsummarysms = []
    //     this.getdetailsummaryomni =[]
    //     this.getdetailsummary = []
    //     this.getdetailsummaryorg = []
        
    //     var dayS = this.daypick.getFullYear() + "-" + (this.daypick.getMonth() + 1) + "-" + this.daypick.getDate()
    //     var dayE = this.daypick.getFullYear() + "-" + (this.daypick.getMonth() + 1) + "-" + this.daypick.getDate()
    //     this.detailsummary.detailOrg(dayS, dayE).subscribe(
    //         (result) => {
    //             this.getdetailsummaryorg = result
    //             this.loading = false
    //             for(let i = 0; i< this.getdetailsummaryorg.length; i++){
    //                 if(this.getdetailsummaryorg[i].onboarding.isDone === true){
    //                   this.arrayisDones.push("hoàn thành")
    //                 }else this.arrayisDones.push("chưa hoàn thành")
    //             }
    //         }
    //     )
    // }
    // DetailSummaryAll(category: string) {
    //     this.loading = true
    //     this.getdetailsummarysms = []
    //     this.getdetailsummaryomni =[]
    //     this.getdetailsummary = []
    //     this.getdetailsummaryorg = []
 
    //     this.name = category
    //     var dayS = this.daypick.getFullYear() + "-" + (this.daypick.getMonth() + 1) + "-" + this.daypick.getDate()
    //     var dayE = this.daypick.getFullYear() + "-" + (this.daypick.getMonth() + 1) + "-" + this.daypick.getDate()

    //     this.detailsummary.detail7Cai(dayS, dayE, category).subscribe(
    //         (result) => {
    //             this.getdetailsummary = result
    //             this.loading = false
    //         }
    //     )
    // }
    // DetailSummarySMS(category: string) {
    //     this.loading = true
    //     this.getdetailsummarysms = []
    //     this.getdetailsummaryomni =[]
    //     this.getdetailsummary = []
    //     this.getdetailsummaryorg = []
    //     this.name = category
    //     var dayS = this.daypick.getFullYear() + "-" + (this.daypick.getMonth() + 1) + "-" + this.daypick.getDate()
    //     var dayE = this.daypick.getFullYear() + "-" + (this.daypick.getMonth() + 1) + "-" + this.daypick.getDate()

    //     this.detailsummary.detail7Cai(dayS, dayE, category).subscribe(
    //         (result) => {
    //             this.getdetailsummarysms = result
    //             this.loading = false
    //         }
    //     )
    // }
    // DetailSummaryOmni(category: string) {
    //     this.loading = true
    //     this.getdetailsummarysms = []
    //     this.getdetailsummaryomni =[]
    //     this.getdetailsummary = []
    //     this.getdetailsummaryorg = []
    //     this.name = category
    //     var dayS = this.daypick.getFullYear() + "-" + (this.daypick.getMonth() + 1) + "-" + this.daypick.getDate()
    //     var dayE = this.daypick.getFullYear() + "-" + (this.daypick.getMonth() + 1) + "-" + this.daypick.getDate()

    //     this.detailsummary.detail7Cai(dayS, dayE, category).subscribe(
    //         (result) => {
    //             this.getdetailsummaryomni = result
    //             this.loading = false
    //         }
    //     )
    // }
    search(): void {
        // this.getLeadFromService();
        // this.getContactFromService();
        // this.getEmailFromService();
        // this.getOmniFromService();
        // this.getUserFromService();
        // this.getSMSFromService();
        // this.getOrgFromService();
        // this.getTicketFromService();
    }

    ngOnInit() {
        // this.getLeadFromService();
        // this.getContactFromService();
        // this.getEmailFromService();
        // this.getOmniFromService();
        // this.getUserFromService();
        // this.getSMSFromService();
        // this.getOrgFromService();
        // this.getTicketFromService();
    }

}
