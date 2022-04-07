import { Container } from "semantic-ui-react";
import React, { useState } from 'react'

import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from './components/EntryLine';

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import EntriyLines from './components/EntriyLines';

function App() {
  const [entries, setEntries] = useState(initialEntries)

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
  }

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense })
    setEntries(result)
  }

  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance label={"Expenses"} value="990.1" size="small" />
      <DisplayBalances />
      <MainHeader type="h3" title={"History"} />
      <EntriyLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader type="h3" title={"Add new Transactiion"} />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;


var initialEntries = [
  {
    id: 1,
    description: "Income Work",
    value: "12$",
    isExpense: false
  },
  {
    id: 2,
    description: "Income Work 0",
    value: "13$",
    isExpense: false
  },
  {
    id: 3,
    description: "Income Work 1",
    value: "14$",
    isExpense: false
  },
  {
    id: 4,
    description: "Expenese Work",
    value: "10$",
    isExpense: true
  }
]