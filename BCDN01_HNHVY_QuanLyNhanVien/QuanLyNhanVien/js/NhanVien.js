// 3. Tạo đối tượng nhân viên với thông tin lấy từ form người dùng nhập vào.
// Đối tượng nhân viên bao gồm các thuộc tính sau:
// +Tài khoản
// +Họ tên
// +Email
// +Mật khẩu
// +Ngày làm
// +Lương cơ bản
// +Chức vụ gồm: Giám đốc, Trưởng Phòng, Nhân Viên
// +Giờ làm trong tháng
// +Tổng lương
// +Loại nhân viên

function NhanVien(account, name, email, pass, date, salary, position, time) {
  this.account = account;
  this.name = name;
  this.email = email;
  this.password = pass;
  this.date = date;
  this.basicSalary = salary;
  this.position = position;
  this.timeJob = time;
  this.totalSalary = 0;
  this.ratingEmployee = ''
 
// // 6. Xây dựng phương thức xếp loại cho đối tượng nhân viên:
// +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
// +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
// +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
// +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình

  this.rating = function () {
    if (this.timeJob >= 192) {
      return this.ratingEmployee = "Xuất sắc"
    } else if (this.timeJob >= 176 && this.timeJob < 192) {
      return this.ratingEmployee = "Giỏi"
    } else if (this.timeJob >= 160 && this.timeJob < 176) {
      return this.ratingEmployee = "Khá"
    } else {
      return this.ratingEmployee = "Trung Bình"
    }
  }

}