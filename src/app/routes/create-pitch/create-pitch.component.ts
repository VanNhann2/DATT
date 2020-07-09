import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';
import { PitchService } from '../../service/pitch.service'
import { Pitch } from '../../model/pitch'
import { LocationService } from '../../service/location.service'
import { DomSanitizer } from '@angular/platform-browser';
import { FileService } from '../../service/file.service'


@Component({
  selector: 'app-create-pitch',
  templateUrl: './create-pitch.component.html',
  styleUrls: ['./create-pitch.component.scss']
})
export class CreatePitchComponent implements OnInit {

  toaster: any;
  toasterConfig: any;
  toasterconfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-bottom-right',
    showCloseButton: true
  });

  form: any = {
    name: null,
    address: null,
    phone_number: null,
    city: null,
    district: null,
    desc: null,
    image: 'assets/img/defaultPitch.jpg',
    user_id: localStorage.getItem('user_id'),
    updatedAt: +new Date()
  }

  city = []
  district = []
  image

  constructor(private router: Router, private toasterService: ToasterService, private PitchService: PitchService, 
    private LocationService: LocationService, private route: ActivatedRoute,
    private sanitizer:DomSanitizer, private FileService : FileService
  ) {

    LocationService.getCity().subscribe(
      data => {
        this.city = data
        console.log(data)
      }
    )
  }
  sanitizeFunc(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  selectImage($event) {
    const formData = new FormData()
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0]
      this.image = file

      formData.append('file', this.image)
      console.log(formData)
      this.FileService.saveFile(formData).subscribe(
        res => {
          this.form.image = res.path
        })
    }

  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')){
      this.PitchService.getPitch(this.route.snapshot.paramMap.get('id')).subscribe(
        res => {
          if (res) {
            this.form.name = res.name
            this.form.phone_number = res.phone_number
            this.form.city = res.city
            this.form.district = res.district
            this.LocationService.getDistrict({ city: this.form.city }).subscribe(
              data => {
                this.district = data
              }
            )
            this.form.desc = res.desc
            this.form.image = res.image
            this.form.address = res.address
          }
        }
      )
    }
  }

  changeCity() {
    this.LocationService.getDistrict({ city: this.form.city }).subscribe(
      data => {
        this.district = data
        this.form.district = data[0]
      }
    )
  }

  create() {
    this.PitchService.create(this.form).subscribe(
      data => {
        this.toasterService.pop('success', 'Tạo sân', 'Tạo sân thành công')
      },
      err => {
        this.toasterService.pop('danger', 'Tạo sân', 'Tạo sân không thành công')
      }
    )
  }
  update(){
    this.PitchService.update(this.route.snapshot.paramMap.get('id'),this.form).subscribe(
      data => {
        this.toasterService.pop('success', 'Cập nhật', 'Cập nhật thành công')
      },
      err => {
        this.toasterService.pop('danger', 'Cập nhật sân', 'Cập nhật sân không thành công')
      }
    )
  }

}
