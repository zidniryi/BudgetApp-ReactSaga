import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { Form } from "semantic-ui-react";
import { addEntryRedux } from '../actions/entries.action';
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

import { v4 as uuidv4 } from 'uuid'

function NewEntryForm() {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [isExpense, setIsExpense] = useState(false);
    const dispatch = useDispatch()


    const addEntry = () => {
        dispatch(addEntryRedux({ id: uuidv4(), description, value, isExpense }))
        setIsExpense(false)
        setValue('')
        setDescription('')
    }

    return (
        <Form unstackable>
            <EntryForm
                description={description}
                setDescription={setDescription}
                value={value}
                setValue={setValue}
                isExpense={isExpense}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel
                addEntry={addEntry}
            />
        </Form>
    );
}

export default NewEntryForm;
