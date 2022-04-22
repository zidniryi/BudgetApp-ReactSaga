const types = {
    ADD_ENTRY: 'ADD_ENTRY',
    ADD_ENTRY_RESULT: 'ADD_ENTRY_RESULT',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
    UPDATE_ENTRY_RESULT: 'UPDATE_ENTRY_RESULT',
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    POPULATE_ENTRIES_DETAIL: 'POPULATE_ENTRIES_DETAIL',
    REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT'
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

export const populateEntries = (payload) => ({
    type: types.POPULATE_ENTRIES,
    payload
})

export const populateEntryDetail = (id, entry) => ({
    type: types.POPULATE_ENTRIES_DETAIL,
    payload: { id, entry }
})

