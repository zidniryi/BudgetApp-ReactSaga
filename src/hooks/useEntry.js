import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addEntryRedux } from '../actions/entries.action';
import { v4 as uuidv4 } from 'uuid'


export default function useEntry() {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [isExpense, setIsExpense] = useState(false);
    const dispatch = useDispatch();

    const addEntry = () => {
        dispatch(addEntryRedux({ id: uuidv4(), description, value, isExpense }));
        setIsExpense(false);
        setValue("");
        setDescription("");
    };
    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
    };
}
