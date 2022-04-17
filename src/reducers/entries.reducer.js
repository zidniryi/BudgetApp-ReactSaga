
var initialEntries = [
    {
        id: 1,
        description: "Income Work",
        value: 121,
        isExpense: false,
    },
    {
        id: 2,
        description: "Income Work 0",
        value: 122,
        isExpense: false,
    },
    {
        id: 3,
        description: "Income Work 1",
        value: 14,
        isExpense: false,
    },
    {
        id: 4,
        description: "Expenese Work",
        value: 10,
        isExpense: true,
    },
];

function entriesReducer(state = initialEntries, action) {
    let newEntries;
    switch (action.type) {
        case "ADD_ENTRY":
            newEntries = state.concat({ ...action.payload });
            return newEntries;
        case "REMOVE_ENTRY":
            newEntries = state.filter(entry => entry.id !== action.payload.id);
            return newEntries;
        case "UPDATE_ENTRY":
            newEntries = [...state];
            const index = newEntries.findIndex(entry => entry.id === action.payload.id);
            newEntries[index] = { ...action.payload.entry };
            return newEntries;
        default:
            return state
    }

}

export default entriesReducer