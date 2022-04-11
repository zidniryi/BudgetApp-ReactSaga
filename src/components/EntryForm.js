import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({ description, setDescription, value, setValue, isExpense, setIsExpense }) {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default EntryForm