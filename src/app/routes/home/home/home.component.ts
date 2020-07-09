import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PitchService } from '../../../service/pitch.service'
import { UserService } from '../../../service/user.service'
import { Router } from "@angular/router"
import { Chart } from 'chart.js';
import { ReportService } from '../../../service/report.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('canvas', {
    static: true
  }) canvas: ElementRef;
  chart: Chart;


  choosePitch
  dayend = new Date()
  daystart = new Date()
  pitches

  labels = []
  revenue = []
  total = []
  users = []
  type = 0
  lineData = {
    labels: [],
    datasets: [
      {
        label: '',
        data: []
      }
    ]
  };

  lineColors = [
    {
      backgroundColor: 'rgba(114,102,186,0.2)',
      borderColor: 'rgba(114,102,186,1)',
      pointBackgroundColor: 'rgba(114,102,186,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(114,102,186,1)'
    }, {
      backgroundColor: 'rgba(35,183,229,0.2)',
      borderColor: 'rgba(35,183,229,1)',
      pointBackgroundColor: 'rgba(35,183,229,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(35,183,229,1)'
    }];
  
  lineOptions = {
    animation: false,
    responsive: true
  };
  typeTime = 0
  typeData = [{type:0,name:"Số  lần đặt sân"}, {type:1,name:"Số  tài khoản đặt sân"} ,{type:2,name:"Doanh thu"}]
  typeTimes = [{type:0,name:'Giờ'}, {type:1,name:'Ngày'}]

  bsConfig = {
    containerClass: 'theme-blue',
    showWeekNumbers: false,
    dateInputFormat: 'DD/MM/YYYY'
  };

  constructor(private PitchService: PitchService, private UserService: UserService, private router: Router, private ReportService: ReportService) {
    
  }

  ngOnInit() {
    this.PitchService.listPitch({ user_id: localStorage.getItem('user_id') }).subscribe(
      res => {
        if (res && res.length) {
          this.pitches = res
          this.choosePitch = res[0]._id
          //this.submit()   
        }
      }
    )
  }

  getChartHour() {
    var dayendConvert = (this.dayend.getMonth()+1)+'/'+this.dayend.getDate()+'/'+this.dayend.getFullYear()
    var daystartConvert = (this.daystart.getMonth()+1)+'/'+this.daystart.getDate()+'/'+this.daystart.getFullYear()
    this.ReportService.getDataChatByHour({dayend:dayendConvert,daystart:daystartConvert,pitch_id:this.choosePitch}).subscribe(
      data => {
        console.log(data)
        for(let i = 0 ; i < data.length ; i++){
          this.labels.push(data[i].hour)
          this.total.push(data[i].total)
        }
   
        this.lineData.labels = this.labels
        this.lineData.datasets[0].label = 'Số lần đặt sân'
        this.lineData.datasets[0].data = this.total
      }
    )
  }

  getChartDay() {
    var dayendConvert = (this.dayend.getMonth()+1)+'/'+this.dayend.getDate()+'/'+this.dayend.getFullYear()
    var daystartConvert = (this.daystart.getMonth()+1)+'/'+this.daystart.getDate()+'/'+this.daystart.getFullYear()
    
    this.ReportService.getDataChatByDay({dayend:dayendConvert,daystart:daystartConvert,pitch_id:this.choosePitch}).subscribe(
      data => {
        console.log(data)
        for(let i = 0 ; i < data.length ; i++){
          this.labels.push(data[i].date)
          this.total.push(data[i].total)
        }
        this.lineData.labels = this.labels
        this.lineData.datasets[0].label = 'Số lần đặt sân'
        this.lineData.datasets[0].data = this.total
      } 
    )
  }
  
  submit() {
    this.labels = [];
    this.revenue = [];
    this.users = [];
    this.total = []
    if(this.typeTime === 0){
      this.getChartHour()
    }else this.getChartDay()
  }

  rFactor() {
    return Math.round(Math.random() * 100);
  };
}
