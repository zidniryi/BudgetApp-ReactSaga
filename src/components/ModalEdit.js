import React from "react";
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from "semantic-ui-react";
import { closeModal } from '../actions/modal.action';
import useEntry from '../hooks/useEntry';

import EntryForm from './EntryForm';

function ModalEdit({
  isOpen,
  description,
  value,
  isExpense,
  id
}) {
  const dispatch = useDispatch()
  const entryUpdate = useEntry(description, value, isExpense)

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <EntryForm
            description={entryUpdate.description}
            setDescription={entryUpdate.setDescription}
            value={entryUpdate.value}
            setValue={entryUpdate.setValue}
            isExpense={entryUpdate.isExpense}
            setIsExpense={entryUpdate.setIsExpense}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary onClick={() => entryUpdate.updateEntry(id)}>Save</Button>
        <Button onClick={() => dispatch(closeModal())}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
