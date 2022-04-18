const types = {
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES'
}

export default types

export const addEntryRedux = (payload) => {
    return { type: types.ADD_ENTRY, payload }
}

export function removeEntryRedux(id) {
    return { type: types.REMOVE_ENTRY, payload: { id } }
}

export const updateEntryRedux = (id, entry) => {
    return { type: types.UPDATE_ENTRY, payload: { id, entry } }
}
export const getAllEntries = () => ({
    type: types.GET_ENTRIES
})

export const populateEntrues = (payload) => ({
    type: types.POPULATE_ENTRIES,
    payload
})

