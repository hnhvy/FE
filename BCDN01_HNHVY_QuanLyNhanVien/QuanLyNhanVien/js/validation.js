// 4. Validation
// + Tài khoản không để trống, không được trùng
// + Tên nhân viên phải là chữ, không để trống
// + Email phải đúng định dạng, không để trống
// + mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
// để trống
// + Ngày làm không để trống, đúng định dạng ngày
// + Lương cơ bản 1 000 000 - 20 000 000, không để trống
// + Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
// + Số giờ làm trong tháng 80 - 200 giờ, không để trống

function validation() {

  //kiểm tra trống
  this.checkEmpty = function (inputValue, spanID, message) {
    if (inputValue.trim() == '') {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    } else {
      document.getElementById(spanID).innerHTML = ''
      return true
    }
  }
  // kiểm tra trùng account
  this.checkAccount = function (inputValue, spanID, message, array) {
    let isAccount = false
    isAccount = array.some((item) => {
      return item.account == inputValue.trim()
    })
    if (isAccount) {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    } else {
      document.getElementById(spanID).innerHTML = ''
      return true
    }
  }
  //kiểm tra name
  this.checkName = function (inputValue, spanID, message) {
    let regex = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$")
    if (regex.test(inputValue)) {
      document.getElementById(spanID).innerHTML = ''
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
  //kiểm tra email
  this.checkEmail = function (inputValue, spanID, message) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regex.test(inputValue)) {
      document.getElementById(spanID).innerHTML = ''
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
  //kiểm tra pass
  this.checkPass = function (inputValue, spanID, message) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/
    if (regex.test(inputValue)) {
      document.getElementById(spanID).innerHTML = ''
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
  //kiểm tra ngày
  this.checkDate = function (inputValue, spanID, message) {
    let regex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/
    if (regex.test(inputValue)) {
      document.getElementById(spanID).innerHTML = ''
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
  //kiểm tra lương, thời gian làm việc 
  this.checkSalaryAndTime = function (inputValue, spanID, message, value1, value2) {
    let regex = /^[0-9]+$/
    if (inputValue < value1 || inputValue > value2 && regex.test(inputValue)) {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    } else {
      document.getElementById(spanID).innerHTML = ''
      return true
    }
  }
  //kiểm tra chức vụ
  this.checkPosition = function (setID, spanID, message) {
    let optionIndex = document.getElementById(setID).selectedIndex
    if (optionIndex != 0) {
      document.getElementById(spanID).innerHTML = ''
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
}
