export interface Pitch {  // khi sử lý dữ liệu thì cứ dùng interface cho đơn giản, còn dùng class khi trong đó có sử lý thêm các function
  name: String;
  address: String;
  city: String;
  district: String;
  phone: Number;
  image: String;
  subPitch: Array<any>;
  currentPage: Number;
  totalPage: Number;
  totalResults: Number;
  createdAt: Number;
  updatedAt:Number
}
