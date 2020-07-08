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
    date: Date;
    constructor(
        private ReportService : ReportService, private PitchService : PitchService
        ) 
    {
        this.date = new Date();
    }
    
    getTotal() {
        this.ReportService.getTotal({pitch_id : this.choosePitch,date:this.date}).subscribe(
            res => {
                console.log(res)
                this.totalBook = res.total
                this.totalRevenue =res.revenue
                this.totalUser = res.users
            }
        )
    }

    ngOnInit() {
        this.PitchService.listPitch(this.request).subscribe(
            res => {
                console.log(res)
                this.pitches = res
                this.choosePitch = res[0]._id
                this.getTotal()
            }
        )
    }

}
