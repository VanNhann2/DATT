import { Component, OnInit , ViewEncapsulation, ViewChild} from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColorsService } from '../../../shared/colors/colors.service';
import { BookPitchService } from '../../../service/book-pitch.service';
import { PitchService } from '../../../service/pitch.service'
import * as _ from 'lodash';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
    bookPitches
    choosePitch
    pitches
    dayend : Date
    daystart : Date
    bsConfig = {
      containerClass: 'theme-blue',
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY'
    };
    request = {
      pitch_id : undefined,
      dayend:undefined,
      daystart:undefined
    }
    constructor(
        public colors: ColorsService ,
        private bookPitchService : BookPitchService,
        private PitchService : PitchService
        ) {
          this.PitchService.listPitch({ user_id: localStorage.getItem('user_id') }).subscribe(
            res => {
              if (res && res.length) {
                this.pitches = res
                this.choosePitch = undefined
              }
            }
          )
     }

    ngOnInit() {
        // this.bookPitchService.historyBookOwner().subscribe(
        //     res => {
        //         console.log(res)
        //         this.bookPitches = res
        //     }
        // )
        this.searchBookPitch()
    }

    searchBookPitch(){
      console.log(this.choosePitch)
      if(this.choosePitch){
        this.request.pitch_id = this.choosePitch
      }
      var dayendConvert = undefined

      if(this.dayend){
         dayendConvert = (this.dayend.getMonth()+1)+'/'+(this.dayend.getDate()+1)+'/'+this.dayend.getFullYear()
         this.request.dayend = dayendConvert
      }
      var daystartConvert = undefined
      if(this.daystart){
         daystartConvert = (this.daystart.getMonth()+1)+'/'+this.daystart.getDate()+'/'+this.daystart.getFullYear()
         this.request.daystart = daystartConvert
      }
      this.bookPitchService.historyBookOwner(this.request).subscribe(
        res =>{
          console.log(res)
          this.bookPitches = res
        }
      )
    }

}
