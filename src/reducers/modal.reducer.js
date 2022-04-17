import { CLOSE_EDIT_MODAL, OPEN_EDIT_MODAL } from '../constants/contantRedux'

const initialState = {
  isOpen: false
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case OPEN_EDIT_MODAL:
      return { ...state, isOpen: true, id: payload.id }
    case CLOSE_EDIT_MODAL:
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export default reducer