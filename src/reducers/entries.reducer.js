import types from '../actions/entries.action';

var initialEntries = [];

function entriesReducer(state = initialEntries, action) {
    let newEntries;
    switch (action.type) {
        case types.ADD_ENTRY_RESULT:
            newEntries = state.concat({ ...action.payload });
            return newEntries;
        case types.REMOVE_ENTRY_RESULT:
            newEntries = state.filter(entry => entry.id !== action.payload.id);
            return newEntries;
        case types.UPDATE_ENTRY_RESULT:
        case types.POPULATE_ENTRIES_DETAIL:
            newEntries = [...state];
            const index = newEntries.findIndex(entry => entry.id === action.payload.id);
            newEntries[index] = { ...newEntries[index], ...action.payload.entry };
            return newEntries;
        case types.POPULATE_ENTRIES:
            return action.payload;
        default:
            return state
    }

}

export default entriesReducer