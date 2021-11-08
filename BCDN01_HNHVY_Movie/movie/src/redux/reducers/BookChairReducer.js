import { BOOKING_CHAIR, DELETE_CHAIR } from "../types/typesMovie"

const stateDefault = {
  listChair: []
}


const BookChairReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case BOOKING_CHAIR: {
      let newListChair = [...state.listChair]
      // tìm vị trí đã chọn chưa
      let index = newListChair.findIndex(chair => chair.soGhe === action.infoChair.soGhe)
      // đã chọn rồi thì xóa, ngược lại thì đưa nó vào danh sách
      index !== -1 ? newListChair.splice(index, 1) : newListChair.push(action.infoChair)
      // gán lại state
      state.listChair = newListChair
      return { ...state }
    }
    case DELETE_CHAIR: {
      let newListChair = [...state.listChair]
      state.listChair = newListChair.filter((chair) => {
        return chair.soGhe !== action.chair.soGhe
      })
      return { ...state }
    }
    default: return { ...state }
  }
}
export default BookChairReducer