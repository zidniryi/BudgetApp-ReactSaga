import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";

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
  addEntry,
}) {
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
        <Button secondary onClick={() => setIsOpen(false)}>Save</Button>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
