function validations() {
  this.checkEmpty = (inputValue, spanID, message) => {
    if (inputValue.trim() == "") {
      spanID.style.color = 'red'
      spanID.innerHTML = message
      return false
    } else {
      spanID.innerHTML = ''
      return true
    }
  }
  this.checkAccount = (inputValue, spanID, message, array) => {
    let isAccount = false
    isAccount = array.some(item => item.taiKhoan === inputValue.trim())
    if (isAccount) {
      spanID.style.color = 'red'
      spanID.innerHTML = message
      return false
    } else {
      spanID.innerHTML = ''
      return true
    }

  }
  this.checkName = (inputValue, spanID, message) => {
    let regex = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$")
    if (inputValue.match(regex)) {
      spanID.innerHTML = ''
      return true
    } else {
      spanID.style.color = 'red'
      spanID.innerHTML = message
      return false
    }
  }
  this.checkPass = (inputValue, spanID, message) => {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/
    if (inputValue.match(regex)) {
      spanID.innerHTML = ''
      return true
    } else {
      spanID.style.color = 'red'
      spanID.innerHTML = message
      return false
    }
  }
  this.checkEmail = (inputValue, spanID, message) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (inputValue.match(regex)) {
      spanID.innerHTML = ''
      return true
    } else {
      spanID.style.color = 'red'
      spanID.innerHTML = message
      return false
    }
  }
  this.checkClassify = (ELE, inputValue, spanID, message) => {
    let selectIn = document.getElementById(ELE).selectedIndex
    if (selectIn == '0' || inputValue == '') {
      spanID.style.color = 'red'
      spanID.innerHTML = message
      return false
    } else {
      spanID.innerHTML = ''
      return true
    }
  }
  this.checkDescription = (inputValue, spanID, message) => {
    if (inputValue.length > 60) {
      spanID.style.color = 'red'
      spanID.innerHTML = message
      return false
    } else {
      spanID.innerHTML = ''
      return true
    }
  }
}

