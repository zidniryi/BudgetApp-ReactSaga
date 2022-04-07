import React, { useState } from "react";

import { Checkbox, Form, Segment } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm({ addEntry }) {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    label="Description"
                    placeholder="Description"
                    icon="tags"
                    width="12"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Input
                    label="Value"
                    placeholder="10.000$"
                    icon="dollar"
                    width="4"
                    iconPosition="left"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Form.Group>
            <Segment>
                <Checkbox toggle label={"Is expense"} checked={isExpense} onChange={() => setIsExpense((oldState) => !oldState)} />
            </Segment>
            <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense} />
        </Form>
    );
}

export default NewEntryForm;
