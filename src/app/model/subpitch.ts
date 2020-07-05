export interface SubPitch {  // khi sử lý dữ liệu thì cứ dùng interface cho đơn giản, còn dùng class khi trong đó có sử lý thêm các function
    name: String;
    pitch_id:String;
    active:boolean;
    subpitch_type:Number;
    createdAt: Number;
    updatedAt:Number
}

class Time {
    price: Number;
    enable : boolean
}