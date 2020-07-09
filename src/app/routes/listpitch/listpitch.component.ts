import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { PitchService } from '../../service/pitch.service'
import { UserService } from '../../service/user.service'
import { Router, ActivatedRoute } from "@angular/router"
import { DOCUMENT } from '@angular/common';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { LocationService } from '../../service/location.service'
import { SubPitch } from 'src/app/model/subpitch';
import { BookPitchService } from '../../service/book-pitch.service'
@Component({
  selector: 'app-listpitch',
  templateUrl: './listpitch.component.html',
  styleUrls: ['./listpitch.component.scss']
})
export class ListpitchComponent implements OnInit {
  getCitys = []
  getDistricts = []
  bookPitch = []
  username = undefined
  search: any = {
    page: 1,
    page_size: 10,
    name: "",
    district: null,
    city: null
  }
  listPitch = {}
  // Datepicker
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  bsConfig = {
    containerClass: 'theme-blue',
    showWeekNumbers: false,
    dateInputFormat: 'DD/MM/YYYY'
  };
  subpitch: any = {
    id: null,
    name: null,
    pitch_id: null,
    subpitch_type: 0,
    active: false,
    time: {
      1: {
        price: 0,
        enable: false
      },
      2: {
        price: 0,
        enable: false
      },
      3: {
        price: 0,
        enable: false
      },
      4: {
        price: 0,
        enable: false
      },
      5: {
        price: 0,
        enable: false
      },
      6: {
        price: 0,
        enable: false
      },
      7: {
        price: 0,
        enable: false
      },
      8: {
        price: 0,
        enable: false
      },
      9: {
        price: 0,
        enable: false
      },
      10: {
        price: 0,
        enable: false
      },
      11: {
        price: 0,
        enable: false
      },
      12: {
        price: 0,
        enable: false
      },
      13: {
        price: 0,
        enable: false
      },
      14: {
        price: 0,
        enable: false
      },
      15: {
        price: 0,
        enable: false
      },
      16: {
        price: 0,
        enable: false
      },
      17: {
        price: 0,
        enable: false
      },
      18: {
        price: 0,
        enable: false
      },
      19: {
        price: 0,
        enable: false
      },
      20: {
        price: 0,
        enable: false
      },
      21: {
        price: 0,
        enable: false
      },
      22: {
        price: 0,
        enable: false
      },
      23: {
        price: 0,
        enable: false
      },
      24: {
        price: 0,
        enable: false
      },

    }
  }

  arrTime = []

  formBookPitch = {
    subpitch_id: null,
    price: 0,
    hour: 0,
    date: new Date(),
    user_id: localStorage.getItem('user_id')

  }
  constructor(private PitchService: PitchService, private BookPitchService: BookPitchService, private UserService: UserService, private router: Router, private locationService: LocationService, private route: ActivatedRoute, @Inject(DOCUMENT) document) {
    this.UserService.getUser().subscribe(
      res => {
        this.username = res.username
      },
      err => this.router.navigate(['login'])
    )
    // Datepicker
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.search.name = params.name
        this.search.district = params.district
        this.search.city = params.city
        this.search.page = params.page
        this.search.page_size = params.page_size
        this.findPitch()
      }
    )
    this.getCity()
    this.getDistrict()
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 250) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }
  buttonName
  toggle(item) {
    item.show = !item.show;
    if (item.show)
      this.buttonName = "Show";
    else
      this.buttonName = "Hide";

  }

  getDistrict() {
    this.locationService.getDistrict({ city_id: this.search.city }).subscribe(
      res => {
        if (res && res.length) {
          this.search.district = res[0]._id
          this.getDistricts = res
        }
      }, err => {
        console.log(err)
      })
  }

  changeCity() {
    console.log(this.search.city)
    this.locationService.getDistrict({ city: this.search.city }).subscribe(
      data => {
        this.getDistricts = data
      }
    )
  }

  getCity() {
    this.locationService.getCity().subscribe(
      res => {
        if (res && res.length) {
          this.search.city = res[0]._id
          this.getCitys = res
        }

      }, err => {
        console.log(err)
      })
  }

  findPitch() {
    this.PitchService.findPitch(this.search).subscribe(
      data => {
        this.listPitch = data
        console.log(this.listPitch);

      }, err => {
        console.log(err)
      })
  }

  getdataBookPitch(id) {
    this.PitchService.getPitchUser(id).subscribe(
      data => {
        this.bookPitch = data
        console.log(this.bookPitch);
      }
    )
  }

  changeSubpitch() {
    this.arrTime = []
    for (let i = 0; i < this.bookPitch[0].subpitchDetail.length; i++) {
      if (this.formBookPitch.subpitch_id === this.bookPitch[0].subpitchDetail[i]._id) {
        this.subpitch = this.bookPitch[0].subpitchDetail[i]
        console.log(this.subpitch)
      }
    }
    for (let i = 1; i <= 24; i++) {
      if (this.subpitch.time[i].enable) {
        this.arrTime.push({ hour: i, price: this.subpitch.time[i].price })
      }
    }
    console.log(this.arrTime)
  }

  changeTime() {
    console.log(this.formBookPitch.hour)
    console.log(this.arrTime)
    for (let i = 0; i < this.arrTime.length; i++) {
      console.log(this.arrTime[i].hour.toString())
      if (this.arrTime[i].hour.toString() === this.formBookPitch.hour) {
        this.formBookPitch.price = this.arrTime[i].price
      }
    }

  }

  submitbookPitch() {
    if (this.formBookPitch.subpitch_id && this.formBookPitch.hour && this.formBookPitch.date && this.formBookPitch.user_id) {
      var convertDate = (this.formBookPitch.date.getMonth() + 1) + '/' + this.formBookPitch.date.getDate() + '/' + this.formBookPitch.date.getFullYear() + " " + this.formBookPitch.hour + ":00:00"
      this.BookPitchService.bookPitch({subpitch_id:this.formBookPitch.subpitch_id, price:this.formBookPitch.price, user_id:this.formBookPitch.user_id,time:+new Date(convertDate)}).subscribe(
        res => {
          console.log(res)
        }
      )
    }
  }
}
