import React from "react";
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from "semantic-ui-react";
import { closeModal } from '../actions/modal.action';

import EntryForm from './EntryForm';

function ModalEdit({
  isOpen,
  setIsOpen,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) {
  const dispatch = useDispatch()

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <EntryForm
            description={description}
            setDescription={setDescription}
            value={value}
            setValue={setValue}
            isExpense={isExpense}
            setIsExpense={setIsExpense}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary onClick={() => dispatch(closeModal())}>Save</Button>
        <Button onClick={() => dispatch(closeModal())}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
