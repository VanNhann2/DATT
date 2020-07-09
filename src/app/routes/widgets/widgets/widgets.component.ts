import { Component, OnInit, ViewChild } from '@angular/core';

import { ColorsService } from '../../../shared/colors/colors.service';
import { PitchService } from '../../../service/pitch.service'
import { Pitch } from '../../../model/pitch'
import { SubPitch } from '../../../model/subpitch'
import { SubpitchService } from '../../../service/subpitch.service'
import { ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss']
})

export class WidgetsComponent implements OnInit {
    toaster: any;
    toasterConfig: any;
    toasterconfig: ToasterConfig = new ToasterConfig({
        positionClass: 'toast-bottom-right',
        showCloseButton: true
    });
    listPitch
    request = {
        user_id: localStorage.getItem('user_id')
    }
    subpitch_id = null

    subpitch: SubPitch = {
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
    arrTypePitch = [{ id: 0, name: 'Sân 5' }, { id: 1, name: 'Sân 7' }]
    constructor(public colors: ColorsService, private toasterService: ToasterService, private PitchService: PitchService, private SubpitchService: SubpitchService) {

    }
    ngOnInit() {
        this.getListPitch()
    }

    getListPitch() {
        this.PitchService.listPitch(this.request).subscribe(
            res => {
                console.log(res)
                this.listPitch = res
            }
        )
    }

    setPitch(pitch_id) {
        this.subpitch = {
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
        this.subpitch.pitch_id = pitch_id;
        this.subpitch_id = null;

    }

    createSubpitch() {
        this.SubpitchService.create(this.subpitch).subscribe(
            data => {
                console.log(data)
                this.toasterService.pop('success', 'Tạo sân con', 'Tạo sân con thành công')
                this.getListPitch()
            }
        )
    }

    getSubpitch(subpitch_id) {
        document.getElementById("openModalButton").click();
        this.subpitch_id = subpitch_id
        this.SubpitchService.getSubPitch(this.subpitch_id).subscribe(
            res => this.subpitch = res
        )
    }

    updateSubPitch() {
        console.log(this.subpitch)
        this.SubpitchService.update(this.subpitch_id, this.subpitch).subscribe(
            res => {
                this.toasterService.pop('success', 'Cập nhật sân con', 'Cập nhật sân con thành công')
                this.getListPitch()
            }
        )
    }

    deleteSubpitch() {
        this.SubpitchService.delete(this.subpitch_id).subscribe(
            res => {
                this.toasterService.pop('success', 'Xóa sân con', 'Xóa sân con thành công')
                this.getListPitch()
            }
        )
    }


}
