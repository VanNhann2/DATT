import { Component, OnInit , ViewEncapsulation, ViewChild} from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColorsService } from '../../../shared/colors/colors.service';
import { BookPitchService } from '../../../service/book-pitch.service'
import * as _ from 'lodash';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
    bookPitches
    constructor(
        public colors: ColorsService ,
        private bookPitchService : BookPitchService
        ) {  
     }

    
    ngOnInit() {
        this.bookPitchService.historyBookOwner().subscribe(
            res => {
                console.log(res)
                this.bookPitches = res
            }
        )
    }

}
