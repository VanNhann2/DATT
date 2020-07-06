import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';
import { PitchService} from '../../service/pitch.service'
import { Pitch} from '../../model/pitch'
import { LocationService } from '../../service/location.service'

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

    form : Pitch = {
      name : null,
      address : null,
      phone: null,
      city:null,
      district:null,
      desc : null,
      image: null,
      user_id : localStorage.getItem('user_id'),
      createdAt: null,
      updatedAt: null,
      subPitch:[]
    }

    city = []
    district = []

    constructor(private router: Router, public toasterService: ToasterService, private PitchService: PitchService, private LocationService : LocationService, private route: ActivatedRoute,

      ) {

      
      this.cropperSettings = new CropperSettings();

      this.cropperSettings.noFileInput = true;

      this.cropperSettings.width = 100;
      this.cropperSettings.height = 100;

      this.cropperSettings.croppedWidth = 100;
      this.cropperSettings.croppedHeight = 100;

      this.cropperSettings.canvasWidth = 300;
      this.cropperSettings.canvasHeight = 240;

      this.cropperSettings.minWidth = 50;
      this.cropperSettings.minHeight = 50;

      this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(0,0,0,.25)';
      this.cropperSettings.cropperDrawSettings.strokeWidth = 2;

      this.cropperSettings.rounded = false;

      this.data1 = {};
      LocationService.getCity().subscribe(
        data => 
        {
          this.city = data  
          console.log(data)  
        }                                                                                    
      )
    }

    ngOnInit() {
      //this.route.snapshot.paramMap.get('_id');
      this.PitchService.getPitch(this.route.snapshot.paramMap.get('id')).subscribe(
        res => {
          console.log(res)
          if(res){
            this.form.name = res.name
            this.form.phone =res.phone_number
            this.form.city = res.city
            this.form.district =res.district
            this.LocationService.getDistrict({city:this.form.city}).subscribe(                                                                
              data => {
                this.district = data
              }
            )
            this.form.desc = res.desc
            this.form.image = res.image_url
            this.form.address = res.address
          }
        }
      )
    }

    changeCity() {
      this.LocationService.getDistrict({city:this.form.city}).subscribe(                                                                
        data => {
          this.district = data
        }
      )
    }

    create() {
      this.PitchService.create(this.form).subscribe(
        data => {
          console.log(data)
        }
      )
    }
    
    name: string;
    data1: any;
    cropperSettings: CropperSettings;

    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

    setRoundedMethod(value: boolean) {
        this.cropperSettings.rounded = value;
    }

    cropped(bounds: Bounds) {
        console.log(bounds);
    }

    fileChangeListener($event) {
        let image: any = new Image();
        let file: File = $event.target.files[0];
        let myReader: FileReader = new FileReader();
        let that = this;
        myReader.onloadend = function(loadEvent: any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
            that.form.image = loadEvent.target.result
        };

        myReader.readAsDataURL(file);
    }
}
