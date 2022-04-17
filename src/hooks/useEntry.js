import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.action";
import { v4 as uuidv4 } from "uuid";
import { closeModal } from '../actions/modal.action';

export default function useEntry(desc = "", val = "", isExp = true) {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [isExpense, setIsExpense] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp]);

    const addEntry = () => {
        dispatch(addEntryRedux({ id: uuidv4(), description, value, isExpense }));
        resetValues()
    };

    const updateEntry = (id) => {
        dispatch(
            updateEntryRedux(id, {
                description,
                value,
                isExpense,
            })
        );
        dispatch(closeModal());
    };

    const resetValues = () => {
        setIsExpense(false);
        setValue("");
        setDescription("");
    }

    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
        updateEntry,
    };
}
