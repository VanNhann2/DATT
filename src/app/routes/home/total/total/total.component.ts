import { Component, OnInit } from '@angular/core';
import { ReportService} from '../../../../service/report.service'
import {PitchService} from '../../../../service/pitch.service'

@Component({
    selector: 'app-total',
    templateUrl: './total.component.html',
    styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
    public loading = false;

    totalBook = 0
    totalUser = 0
    totalRevenue = 0
    request = {
        user_id :localStorage.getItem('user_id')
    }
    pitches
    choosePitch
    date = new Date();
    bsConfig = {
        containerClass: 'theme-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY'
      };
    constructor(
        private ReportService : ReportService, private PitchService : PitchService
        ) 
    {

    }
    
    getTotal() {
        var dateConvert = (this.date.getMonth()+1)+'/'+this.date.getDate()+'/'+this.date.getFullYear()
        this.ReportService.getTotal({pitch_id : this.choosePitch,date:dateConvert}).subscribe(
            res => {    
                console.log(res)
                if(res){
                    this.totalBook = res.total
                    this.totalRevenue =res.revenue
                    this.totalUser = res.users.length
                }
            }
        )
    }

    ngOnInit() {
        this.PitchService.listPitch(this.request).subscribe(
            res => {
                console.log(res)
                if(res && res.length){
                    this.pitches = res
                    this.choosePitch = res[0]._id
                    this.getTotal()
                }
            }
        )
    }

}
