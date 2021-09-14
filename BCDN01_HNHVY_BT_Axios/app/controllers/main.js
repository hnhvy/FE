var infoUsers = new NguoiDungServices()
var isValid = new validations()
var mangUser = []


function getELE(id) {
  return document.querySelector(id)
}
//hàm danh sách user
function listUser() {
  infoUsers.getListUser()
    .then((response) => {
      mangUser = response.data
      hienThiTable(mangUser)
    })
    .catch((error) => {
      console.log(error);
    })
}
listUser()

function hienThiTable(listItem) {
  let html = listItem.map((item) => {
    return `
      <tr>
          <td>${item.id}</td>
          <td>${item.taiKhoan}</td>
          <td>${item.matKhau}</td>
          <td>${item.hoTen}</td>
          <td>${item.email}</td>
          <td>${item.ngonNgu}</td>
          <td>${item.loaiND}</td>
          <td>
            <button class = "btn btn-danger" onclick="xoaUser(${item.id})">Xóa</button>
            <button class = "btn btn-info btn-see" onclick="hienThiUser(${item.id})" data-target="#myModal" data-toggle="modal">Xem</button>
          </td>
      </tr>
    `
  })
  getELE('#tblDanhSachNguoiDung').innerHTML = html.join('')
}
//hàm validation 
function CheckValidation() {

  let name = getELE('#HoTen').value
  let pass = getELE('#MatKhau').value
  let email = getELE('#Email').value
  let img = getELE('#HinhAnh').value
  let classify = getELE('#loaiNguoiDung').value
  let language = getELE('#loaiNgonNgu').value
  let description = getELE('#MoTa').value
  let isValue = true


  isValue &= isValid.checkEmpty(name, getELE('#txtHT'), "Vui lòng điền vào trường dữ liệu này") && isValid.checkName(name, getELE('#txtHT'), "Trường này không đúng định dạng!!")
  isValue &= isValid.checkEmpty(pass, getELE('#txtMK'), "Vui lòng điền vào trường dữ liệu này") && isValid.checkPass(pass, getELE('#txtMK'), "Trường này có ít nhất 1 ký tự hoa, 1 ký tự đặc biệt, 1 ký tự số, độ dài 6 - 8 kí tự")
  isValue &= isValid.checkEmpty(email, getELE('#txtEmail'), "Vui lòng điền vào trường dữ liệu này") && isValid.checkEmail(email, getELE('#txtEmail'), "Trường này không đúng định dạng email!!")
  isValue &= isValid.checkEmpty(img, getELE('#txtHA'), "Vui lòng điền vào trường dữ liệu này")
  isValue &= isValid.checkClassify('loaiNguoiDung', classify, getELE('#txtND'), "Vui lòng chọn loại người dùng")
  isValue &= isValid.checkClassify('loaiNgonNgu', language, getELE('#txtNN'), "Vui lòng chọn loại ngôn ngữ !!")
  isValue &= isValid.checkEmpty(description, getELE('#txtMT'), "Vui lòng điền vào trường dữ liệu này") && isValid.checkDescription(description, getELE('#txtMT'), "Không vượt quá 60 kí tự!!")
  return isValue
}
//hàm kiểm tra validation account
function checkValidAccount() {
  let isAccount = true
  let account = getELE('#TaiKhoan').value
  isAccount = isValid.checkEmpty(account, getELE('#txtTK'), 'Vui lòng điền vào trường dữ liệu này') && isValid.checkAccount(account, getELE('#txtTK'), 'Tài Khoản này bị trùng!!', mangUser)
  return isAccount
}
checkValidAccount()


// hàm thêm user
function themUser() {
  //tạo biến và lấy các giá trị từ modal khi click
  let account = getELE('#TaiKhoan').value
  let name = getELE('#HoTen').value
  let pass = getELE('#MatKhau').value
  let email = getELE('#Email').value
  let img = getELE('#HinhAnh').value
  let classify = getELE('#loaiNguoiDung').value
  let language = getELE('#loaiNgonNgu').value
  let description = getELE('#MoTa').value

  let isValidForm = CheckValidation()
  let isValidAccount = checkValidAccount()
  if (isValidForm && isValidAccount) {
    let newUsers = new user(account, name, pass, email, classify, language, description, img)
    infoUsers.addUser(newUsers)
      .then((response) => {
        resetForm()
        getELE('.modal-header .close').click()
        listUser()
        setTimeout(() => {
          alert('Thêm người dùng thành công')
        }, 500)
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
getELE('#btnThemNguoiDung').addEventListener('click', () => {
  getELE('.modal-footer').innerHTML = `
    <button class="btn btn-success" onclick="themUser()" >Thêm Người Dùng</button>
  `
})

//hàm xem user

function hienThiUser(id) {
  infoUsers.seeUser(id)
    .then((response) => {
      let { id, taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh } = response.data
      getELE('#TaiKhoan').value = taiKhoan
      getELE('#TaiKhoan').disabled = true
      let txtMessage = document.querySelectorAll('.form-group span')
      txtMessage.forEach(item => {
        item.innerHTML = ''
      })
      getELE('#HoTen').value = hoTen
      getELE('#MatKhau').value = matKhau
      getELE('#Email').value = email
      getELE('#HinhAnh').value = hinhAnh
      getELE('#loaiNguoiDung').value = loaiND
      getELE('#loaiNgonNgu').value = ngonNgu
      getELE('#MoTa').value = moTa
      getELE('.modal-footer').innerHTML = `
    <button class="btn btn-success" onclick="capNhatUser('${id}')" >Cập Nhập</button>
  `
    })
    .catch((error) => {
      console.log(error);
    })

}

//hàm cập nhâp

function capNhatUser(id) {
  let account = getELE('#TaiKhoan').value
  let name = getELE('#HoTen').value
  let pass = getELE('#MatKhau').value
  let email = getELE('#Email').value
  let img = getELE('#HinhAnh').value
  let classify = getELE('#loaiNguoiDung').value
  let language = getELE('#loaiNgonNgu').value
  let description = getELE('#MoTa').value
  let isValidForm = CheckValidation()
  if (isValidForm) {
    let newUsers = new user(account, name, pass, email, classify, language, description, img)
    infoUsers.updateUser(newUsers, id)
      .then((response) => {
        listUser()
        getELE('.modal-header .close').click()
        setTimeout(() => {
          alert('Cập nhập thành công')
        }, 300)
        setTimeout(() => {
          success(id)
        }, 500)
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
// hàm xóa người dùng

function xoaUser(id) {
  infoUsers.deleteUser(id)
    .then((response) => {
      listUser()
      getELE('.modal-header .close').click()
    })
    .catch((error) => {
      console.log(error);
    })
}
// hàm reset form 
function resetForm() {
  getELE('#TaiKhoan').disabled = false
  let forms = document.querySelectorAll('.form-group .form-control')
  forms.forEach(item => {
    item.value = ''
  })
  let txtMessage = document.querySelectorAll('.form-group span')
  txtMessage.forEach(item => {
    item.innerHTML = ''
  })
}

getELE('#btnThemNguoiDung').addEventListener('click', resetForm)
// hàm tìm kiếm người dùng
function Search() {
  let key = getELE('input[placeholder="Nhập từ khóa"]').value.trim().toLowerCase()
  let newListUser = []
  mangUser.map((item) => {
    let lowerAccount = item.taiKhoan.trim().toLowerCase()
    let result = lowerAccount.indexOf(key)
    if (result < 0) return
    newListUser.push(item)
  })
  hienThiTable(newListUser)
}
getELE('#basic-addon2').addEventListener('click', Search)


// hàm xử lý oninput
function handleOninput(txtMessage, input) {
  let txtMessages = getELE(txtMessage)
  let inputForm = getELE(input)
  inputForm.oninput = () => {
    if (txtMessages.innerHTML !== '') {
      txtMessages.innerHTML = ''
    }
  }
}

handleOninput('#txtTK', '#TaiKhoan')
handleOninput('#txtHT', '#HoTen')
handleOninput('#txtMK', '#MatKhau')
handleOninput('#txtEmail', '#Email')
handleOninput('#txtHA', '#HinhAnh')
handleOninput('#txtND', '#loaiNguoiDung')
handleOninput('#txtNN', '#loaiNgonNgu')
handleOninput('#txtMT', '#MoTa')


