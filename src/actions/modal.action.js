import { CLOSE_EDIT_MODAL, OPEN_EDIT_MODAL } from '../constants/contantRedux';

export const openEditModal = (id) => ({
    type: OPEN_EDIT_MODAL,
    payload: { id }
})


export const closeModal = () => ({
    type: CLOSE_EDIT_MODAL,
})