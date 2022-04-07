import React from 'react'

import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm() {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input label='Description' placeholder='Description' icon="tags" width="12" />
                <Form.Input label='Value' placeholder='10.000$' icon="dollar" width="4" iconPosition="left" />
            </Form.Group>
            <ButtonSaveOrCancel />
        </Form>

    )
}

export default NewEntryForm