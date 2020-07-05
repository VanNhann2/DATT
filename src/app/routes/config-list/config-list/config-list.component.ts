import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';    
import { ColorsService } from '../../../shared/colors/colors.service';
// import { DbOrganization } from '../../../model/organization'
// import {  modulePer } from '../../../model/owner'
// import { OrganizationService } from '../../../service/organization.service'
import { Router } from "@angular/router"
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
// import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
// import { dataUpdate } from 'src/app/model/dataUpdated';
// import {modulePer} from '../../../model/owner'

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.scss']
})
export class ConfigListComponent implements OnInit {

  constructor(
    public colors: ColorsService,
    ){}

  ngOnInit() {
  }
}