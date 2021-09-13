
let hienThiDanhSachNV = new DanhSachNhanVien()
let valid = new validation()
function successResult(text) {
  let successText = document.createElement('p')
  document.querySelector('form[role="form"]').appendChild(successText)
  successText.style.color = 'green'
  successText.style.textAlign = 'center'
  successText.innerHTML = text
  return setInterval(() => {
    successText.innerHTML = ""
  }, 1000)
}


// hàm lấy lấy các element trong html
function getELE(id) {
  return document.getElementById(id)
}
//In ra table danh sách nhân viên
function hienThiTable(array) {
  let html = array.map((item) => {
    return `<tr>
      <td>${item.account}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.date}</td>
      <td>${item.position}</td>
      <td>${item.totalSalary}</td>
      <td>${item.ratingEmployee}</td>
      <td class="d-inline-block" >
      <button class="btn btn-danger  " onclick="xoaNhanVien('${item.account}')">Xóa</button>
      <button class="btn btn-info mt-2 " onclick="hienthiNV('${item.account}')"  data-toggle="modal"
                    data-target="#myModal" >Xem</button>
      </td>
    </tr>`
  })
  getELE('tableDanhSach').innerHTML = html.join('')
}
//hàm setLocal
function setLocal() {
  localStorage.setItem('ADD_EMPLOYEE', JSON.stringify(hienThiDanhSachNV.mangNV))
}
//hàm getLocal
function getLocal() {
  if (localStorage.getItem('ADD_EMPLOYEE') != null) {
    hienThiDanhSachNV.mangNV = JSON.parse(localStorage.getItem('ADD_EMPLOYEE'))
    hienThiTable(hienThiDanhSachNV.mangNV)
  }
}
getLocal()


// Xây dựng phương thức tính tổng lương cho đối tượng nhân viên
// +nếu chức vụ là giám đốc: tổng lương = lương cơ bản * 3
// +nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản * 2
// +nếu chức vụ là nhân viên: tổng lương = lương cơ bản *

function sum(salary) {
  let totalSalary = 0
  let opIndex = getELE('chucvu').selectedIndex
  switch (opIndex) {
    case 1: totalSalary = salary * 3
      break
    case 2: totalSalary = salary * 2
      break
    case 3: totalSalary = salary * 1
      break
    default: totalSalary
  }
  return totalSalary
}
//validation
function isValid() {

  let inputName = getELE('name').value
  let inputEmail = getELE('email').value
  let inputPass = getELE('password').value
  let inputDate = getELE('datepicker').value
  let inputSalary = getELE('luongCB').value
  let inputTimeJob = getELE('gioLam').value
  var isValue = true
  //validation-account

  //validation-name
  isValue &= valid.checkEmpty(inputName, 'tbTen', 'Trường này không được để trống!!') && valid.checkName(inputName, 'tbTen', 'Sai kí tự tên nhân viên!!');
  //validation-email
  isValue &= valid.checkEmpty(inputEmail, 'tbEmail', 'Trường này không được để trống!!') && valid.checkEmail(inputEmail, 'tbEmail', 'Email không đúng định dạng');
  //validation-password
  isValue &= valid.checkEmpty(inputPass, 'tbMatKhau', 'Trường này không được để trống!!') && valid.checkPass(inputPass, 'tbMatKhau', 'mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)');
  //validation-date
  isValue &= valid.checkEmpty(inputDate, 'tbNgay', 'Trường này không được để trống!!') && valid.checkDate(inputDate, 'tbNgay', 'Định dạng ngày chưa đúng!!');
  //validation-salary
  isValue &= valid.checkEmpty(inputSalary, 'tbLuongCB', 'Trường này không được để trống!!') && valid.checkSalaryAndTime(inputSalary, 'tbLuongCB', 'Lương nhân viên chưa đúng!!', 1e6, 20e6);
  //validation-position
  isValue &= valid.checkPosition('chucvu', 'tbChucVu', 'Vui lòng chọn chức vụ!!');
  isValue &= valid.checkEmpty(inputTimeJob, 'tbGiolam', 'Trường này không được để trống!!') && valid.checkSalaryAndTime(inputTimeJob, 'tbGiolam', 'Giờ làm chưa đúng!!', 80, 200);
  return isValue
}
// validation account
function isValidAccount() {
  let inputAccount = getELE('tknv').value
  var isValue = true
  isValue = valid.checkEmpty(inputAccount, 'tbTKNV', 'Trường này không được để trống!!') && valid.checkAccount(inputAccount, 'tbTKNV', 'Mã tài khoản bị trùng!!', hienThiDanhSachNV.mangNV)
  return isValue
}



// Thêm nhân viên mới (có sử dụng localStorage)
function themNV() {
  //tạo biến lấy các giá trị người dùng nhập vao khi click
  let inputAccount = getELE('tknv').value
  let inputName = getELE('name').value
  let inputEmail = getELE('email').value
  let inputPass = getELE('password').value
  let inputDate = getELE('datepicker').value
  let inputSalary = getELE('luongCB').value
  let inputPosition = getELE('chucvu').value
  let inputTimeJob = getELE('gioLam').value

  let isNewValid2 = isValid()
  let isNewValid1 = isValidAccount()
  if (isNewValid1 && isNewValid2) {
    let nv = new NhanVien(inputAccount, inputName, inputEmail, inputPass, inputDate, inputSalary, inputPosition, inputTimeJob)
    nv.ratingEmployee = nv.rating()
    //tính lương
    nv.totalSalary = sum(nv.basicSalary).toLocaleString()
    //đẩy các giá trị trong class component vào trong mảng
    hienThiDanhSachNV.themHienThiDanhSachNV(nv)
    setLocal()
    //render ra giao diện ui
    hienThiTable(hienThiDanhSachNV.mangNV)
    document.querySelector('form[role="form"]').reset()
    successResult('Thêm nhân viên thành công')
  }

}
getELE('btnThemNV').addEventListener('click', themNV)

//hàm reset các giá trị
function resetForm() {
  let inputReset = document.querySelector('form[role="form"]').reset()
  getELE('tknv').disabled = false
  getELE('btnCapNhat').disabled = true
  getELE('btnThemNV').disabled = false
  let spanIDs = document.querySelectorAll('.sp-thongbao')
  spanIDs.forEach(spanID => spanID.innerHTML = '')
  if (!inputReset) return
}
getELE('btnThem').addEventListener('click', resetForm)
// 7. Xóa nhân viên

function xoaNhanVien(account) {
  hienThiDanhSachNV.delete(account)
  hienThiTable(hienThiDanhSachNV.mangNV)
  setLocal()
}


// xem nhân viên
function hienthiNV(account) {
  let index = hienThiDanhSachNV.findEmploy(account)
  let listTable = hienThiDanhSachNV.mangNV[index]
  getELE('tknv').disabled = true
  getELE('btnCapNhat').disabled = false
  getELE('btnThemNV').disabled = true
  getELE('tknv').value = listTable.account
  getELE('name').value = listTable.name
  getELE('email').value = listTable.email
  getELE('password').value = listTable.password
  getELE('datepicker').value = listTable.date
  getELE('luongCB').value = listTable.basicSalary
  getELE('chucvu').value = listTable.position
  getELE('gioLam').value = listTable.timeJob
  let spanIDs = document.querySelectorAll('.sp-thongbao')
  spanIDs.forEach(spanID => spanID.innerHTML = '')

}
//Cập nhật nhân viên (có validation)
function updateNV() {
  let inputAccount = getELE('tknv').value
  let inputName = getELE('name').value
  let inputEmail = getELE('email').value
  let inputPass = getELE('password').value
  let inputDate = getELE('datepicker').value
  let inputSalary = getELE('luongCB').value
  let inputPosition = getELE('chucvu').value
  let inputTimeJob = getELE('gioLam').value
  getELE('tknv').disabled = true
  let isNewValid = isValid()
  if (isNewValid) {
    let nv = new NhanVien(inputAccount, inputName, inputEmail, inputPass, inputDate, inputSalary, inputPosition, inputTimeJob)
    nv.ratingEmployee = nv.rating()
    //tính lương
    nv.totalSalary = sum(nv.basicSalary).toLocaleString()
    //đẩy các giá trị trong class component vào trong mảng
    hienThiDanhSachNV.update(nv)
    //render ra giao diện ui
    hienThiTable(hienThiDanhSachNV.mangNV)
    setLocal()
    successResult('Cập nhập nhân viên thành công')
    getELE('btnDong').click()

  }
}
getELE('btnCapNhat').addEventListener('click', updateNV)

// Tìm Nhân Viên theo loại (xuất săc, giỏi, khá...) và hiển thị
function searchXL() {
  let key = getELE('searchName').value
  let result = hienThiDanhSachNV.search(key)
  hienThiTable(result)
}
getELE('btnTimNV').onclick = searchXL
