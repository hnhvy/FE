import { BOOKING_CHAIR, DELETE_CHAIR } from "../types/typesMovie"

export const handleBooking = (item) => {
  return {
    type: BOOKING_CHAIR,
    infoChair: item
  }
}
export const handleDeleteChair = (item) => {
  return {
    type: DELETE_CHAIR,
    chair: item
  }
}