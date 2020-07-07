export interface User {  // khi sử lý dữ liệu thì cứ dùng interface cho đơn giản, còn dùng class khi trong đó có sử lý thêm các function
    username: String;
    createdAt: Number;
    updatedAt:Number;
    email: String;
    firstname:String;
    lastname:String;
    phone:String;
    permission:String;
    password:String
  }